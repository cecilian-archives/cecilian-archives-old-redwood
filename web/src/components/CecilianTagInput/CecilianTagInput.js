import { useState, useCallback } from "react";
import { useQuery, useMutation } from "@redwoodjs/web";
import TagInput from "src/components/shared/TagInput/TagInput";
import { FaRegUserCircle } from "react-icons/fa";

const formatCase = (str) => {
  const words = str.split(" ");
  if (!words.length) return "";
  const firstLetter = str.charAt(0);
  if (firstLetter === firstLetter.toUpperCase()) return str;
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const formatLabel = (cecilian) => {
  const years = cecilian.tags
    .filter((tag) => tag.tag.type === "YEAR")
    .map((tag) => tag.tag.year.name)
    .sort();
  const firstYear = years[0];
  const lastYear = years[years.length - 1];
  const yearPhrase = years.length
    ? years.length === 1
      ? firstYear
      : `${firstYear}–${lastYear}`
    : null;
  return `${cecilian.displayName}${
    yearPhrase ? ` (active ${yearPhrase})` : ""
  }`;
};

const searchQuery = gql`
  query CecilianTagInputQuery($needle: String) {
    searchCecilians(needle: $needle) {
      user {
        picture
      }
      slug
      displayName
      otherNames
      tags {
        tag {
          id
          type
          year {
            slug
            name
          }
        }
      }
    }
  }
`;

const creationMutation = gql`
  mutation CreateCecilianMutation($input: CreateCecilianInput!) {
    createCecilian(input: $input) {
      user {
        picture
      }
      slug
      displayName
      otherNames
      tags {
        tag {
          id
          type
          year {
            slug
            name
          }
        }
      }
    }
  }
`;

const formatCecilianAsOption = (cecilian) => ({
  key: cecilian.slug,
  label: formatLabel(cecilian),
  picture: cecilian?.user?.picture,
});

const CecilianTagInput = ({ single = false, allowCreation = false }) => {
  const { loading, error, data, refetch } = useQuery(searchQuery, {
    notifyOnNetworkStatusChange: true,
  });
  const [
    createCecilianTag,
    { loading: mutateLoading, error: mutateError },
  ] = useMutation(creationMutation, { awaitRefetchQueries: true });

  const [selectedOptions, setSelected] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const options = (data?.searchCecilians || []).map(formatCecilianAsOption);

  const onSearchChange = useCallback(
    (searchValue) => {
      refetch({ needle: searchValue });
    },
    [refetch]
  );

  const onCreateOption = async (value) => {
    if (!value.trim()) return false;
    const {
      data: { createCecilian: newCecilian },
    } = await createCecilianTag({
      variables: {
        input: {
          displayName: formatCase(value),
        },
      },
      refetchQueries: [{ query: searchQuery, variables: { needle: value } }],
    });
    if (!newCecilian) return false;
    const newOption = formatCecilianAsOption(newCecilian);
    setInputValue("");
    setSelected((current) => (single ? [newOption] : [...current, newOption]));
  };

  return (
    <TagInput
      options={options}
      tagList={selectedOptions}
      setTagList={setSelected}
      inputValue={inputValue}
      setInputValue={setInputValue}
      placeholder="Type to search"
      isLoading={loading}
      searchCallback={onSearchChange}
      onCreate={allowCreation ? onCreateOption : undefined}
      singleSelection={single}
      tagType="cecilian"
      fallbackIcon={FaRegUserCircle}
    />
  );
};

export default CecilianTagInput;
