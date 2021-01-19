import { useState, useCallback } from "react";
import { useQuery, useMutation } from "@redwoodjs/web";
import { useTheme } from "styled-components";

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

// const creationMutation = gql`
//   mutation CreateCecilianMutation($input: CreateCecilianInput!) {
//     createCecilian(input: $input) {
//       user {
//         picture
//       }
//       slug
//       displayName
//       otherNames
//       tags {
//         tag {
//           id
//           type
//           year {
//             slug
//             name
//           }
//         }
//       }
//     }
//   }
// `;

const CecilianTagInput = ({ single = false, allowCreation = false }) => {
  const theme = useTheme();
  const { loading, error, data, refetch } = useQuery(searchQuery, {
    notifyOnNetworkStatusChange: true,
  });
  // const [
  //   createCecilianTag,
  //   { loading: mutateLoading, error: mutateError },
  // ] = useMutation(creationMutation, { awaitRefetchQueries: true });

  const [selectedOptions, setSelected] = useState([]);
  const onChange = (selectedOptions) => {
    setSelected(selectedOptions);
  };

  const options = (data?.searchCecilians || []).map((cecilian) => ({
    key: cecilian.slug,
    label: formatLabel(cecilian),
    color: theme.archive.deepGreen,
  }));

  const onSearchChange = useCallback(
    (searchValue) => {
      refetch({ needle: searchValue });
    },
    [refetch]
  );

  const onCreateOption = async (searchValue, flattenedOptions = []) => {
    const normalize = (str) => str.trim().toLowerCase();
    const normalizedSearchValue = normalize(searchValue);
    if (!normalizedSearchValue) return false;

    if (
      flattenedOptions.findIndex(
        (option) => normalize(option.label) === normalizedSearchValue
      ) === -1
    ) {
      // const {
      //   data: { createCecilian: newCecilian },
      // } = await createCecilianTag({
      //   variables: {
      //     input: {
      //       displayName: formatCase(searchValue),
      //     },
      //   },
      //   refetchQueries: [
      //     { query: searchQuery, variables: { needle: searchValue } },
      //   ],
      // });
      // if (!newCecilian) return false;
      const newOption = {
        key: null,
        label: formatCase(searchValue),
        color: theme.archive.deepGreen,
      };
      setSelected((current) =>
        single ? [newOption] : [...current, newOption]
      );
    }
  };

  return (
    <div
      placeholder="Type to search"
      async
      isLoading={loading}
      options={options}
      selectedOptions={selectedOptions}
      singleSelection={single}
      onChange={onChange}
      onSearchChange={onSearchChange}
      onCreateOption={allowCreation ? onCreateOption : undefined}
      customOptionText="Add a tag for {searchValue}"
      isClearable={false}
      sortMatchesBy="startsWith"
    />
  );
};

export default CecilianTagInput;
