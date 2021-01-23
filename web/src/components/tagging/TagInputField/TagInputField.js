import { useState, useCallback } from "react";
import { useQuery, useMutation } from "@redwoodjs/web";
import TagInputBase from "src/components/tagging/TagInputBase/TagInputBase";
import tagTypeMap from "../tagTypeMap";

const TagInputField = ({ type, single = false, allowCreation = false }) => {
  const {
    searchQuery,
    creationMutation,
    optionFormatter,
    inputFormatter,
    fallbackIcon,
  } = tagTypeMap[type];

  const { loading, error, data, refetch } = useQuery(searchQuery, {
    notifyOnNetworkStatusChange: true,
  });
  const [
    createTag,
    { loading: mutateLoading, error: mutateError },
  ] = useMutation(creationMutation, { awaitRefetchQueries: true });

  const [selectedOptions, setSelected] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const options = (data?.searchResults || []).map((result) =>
    optionFormatter(result, selectedOptions)
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
        input: inputFormatter(value),
      },
      refetchQueries: [{ query: searchQuery, variables: { needle: value } }],
    });
    if (!newEntity) return false;
    const newOption = optionFormatter(newEntity);
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
      fallbackIcon={fallbackIcon}
    />
  );
};

export default TagInputField;
