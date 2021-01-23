import { useState, useCallback } from "react";
import { useQuery, useMutation } from "@redwoodjs/web";
import TagInputBase from "src/components/tagging/TagInputBase/TagInputBase";
import { cecilianSearchQuery, cecilianCreationMutation } from "../gql/cecilian";
import { FaRegUserCircle } from "react-icons/fa";
import formatCase from "../helpers/formatCase";
import formatCecilianAsOption from "../helpers/formatCecilianAsOption";

const TagInputField = ({
  type = "cecilian",
  single = false,
  allowCreation = false,
}) => {
  const { loading, error, data, refetch } = useQuery(cecilianSearchQuery, {
    notifyOnNetworkStatusChange: true,
  });
  const [
    createTag,
    { loading: mutateLoading, error: mutateError },
  ] = useMutation(cecilianCreationMutation, { awaitRefetchQueries: true });

  const [selectedOptions, setSelected] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const options = (data?.searchResults || []).map((result) =>
    formatCecilianAsOption(result, selectedOptions)
  );

  const onSearchChange = useCallback(
    (searchValue) => {
      refetch({ needle: searchValue });
    },
    [refetch]
  );

  const onCreateOption = async (value) => {
    if (!value.trim()) return false;
    const {
      data: { newEntity },
    } = await createTag({
      variables: {
        input: {
          displayName: formatCase(value),
        },
      },
      refetchQueries: [{ query: searchQuery, variables: { needle: value } }],
    });
    if (!newEntity) return false;
    const newOption = formatCecilianAsOption(newEntity);
    setInputValue("");
    setSelected((current) => (single ? [newOption] : [...current, newOption]));
  };

  return (
    <TagInputBase
      options={options}
      tagList={selectedOptions}
      setTagList={setSelected}
      inputValue={inputValue}
      setInputValue={setInputValue}
      placeholder="Type to search"
      isLoading={loading}
      isCreating={mutateLoading}
      loadError={error}
      createError={mutateError}
      searchCallback={onSearchChange}
      onCreate={allowCreation ? onCreateOption : undefined}
      singleSelection={single}
      tagType={type}
      fallbackIcon={FaRegUserCircle}
    />
  );
};

export default TagInputField;
