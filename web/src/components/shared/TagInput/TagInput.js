import { useRef } from "react";
import tw from "twin.macro";
import { TextField } from "@redwoodjs/forms";
import Tag from "../Tag/Tag";

const TagInput = ({ tagList, setTagList, name, placeholder }) => {
  const inputRef = useRef();

  const updateTagList = (event) => {
    const tagString = event.target.value;
    setTagList([...new Set([...tagList, tagString])]);
    inputRef.current.value = "";
  };

  const removeSingleTag = (idx) => () => {
    const newTags = [...tagList];
    newTags.splice(idx, 1);
    setTagList(newTags);
  };

  const inputKeyDown = (event) => {
    const val = event.target.value;
    if (event.key === "Backspace" && !val) {
      removeSingleTag(tagList.length - 1)();
    }
    if (event.key === "Enter" && val) {
      updateTagList(event);
    }
  };

  return (
    <Root onClick={() => inputRef.current.focus()}>
      <Container>
        {tagList.map((tag, idx) => (
          <Tag key={tag} label={tag} remove={removeSingleTag(idx)} />
        ))}
        <Input
          ref={inputRef}
          name={name}
          placeholder={tagList.length === 0 ? placeholder : ""}
          autoComplete="off"
          onKeyDown={inputKeyDown}
        />
      </Container>
    </Root>
  );
};

const Root = tw.div`
  rounded
  border
  border-grey-dark
  bg-white
  w-full
  max-w-3xl
  max-h-32
  overflow-y-scroll
  flex
  items-stretch
  flex-wrap
  shadow-sm
  focus:ring-2
  focus:ring-deepBlue
`;

const Container = tw.div`
  py-1
  flex
  items-center
  flex-wrap
  w-full
`;

const Input = tw(TextField)`
  font-body
  flex-grow
  border-transparent
  outline-none
  focus:outline-none
  focus:border-transparent
  focus:ring-0
  mx-auto
  h-10
  w-full
`;

export default TagInput;
