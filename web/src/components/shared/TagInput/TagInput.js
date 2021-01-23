import { useRef, useState } from "react";
import tw, { styled } from "twin.macro";
import Tag from "../Tag/Tag";
import useClickOutside from "src/utils/useClickOutside";

const OptionIcon = ({ image, Fallback }) => {
  if (image) {
    return (
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
    );
  }
  if (Fallback) {
    return (
      <ImageWrapper>
        <Fallback size="1.25em" /> {/* i.e. w-6 */}
      </ImageWrapper>
    );
  }
  return null;
};
const ImageWrapper = tw.div`
  w-6
  flex
  justify-center
  items-center
  text-deepBlue
  ml-1
  mr-4
`;
const Image = tw.img`
  w-6
  h-6
  rounded-full
`;

const TagInput = ({
  tagList,
  setTagList,
  inputValue,
  setInputValue,
  name,
  placeholder,
  options,
  fallbackIcon,
  isLoading,
  searchCallback,
  onCreate,
  singleSelection,
  tagType,
}) => {
  const inputRef = useRef();
  const dropdownRef = useRef();
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  useClickOutside(dropdownRef, dropdownIsOpen, () => setDropdownIsOpen(false));

  const updateTagList = (tagString) => {
    setTagList([...new Set([...tagList, tagString])]);
    setInputValue("");
  };

  const removeSingleTag = (idx) => () => {
    const newTags = [...tagList];
    newTags.splice(idx, 1);
    setTagList(newTags);
  };

  const inputKeyDown = (event) => {
    const val = String(event.target.value).replaceAll("|", "");
    if (event.key === "Backspace" && !val) {
      removeSingleTag(tagList.length - 1)();
    }
    if (event.key === "Enter" && val) {
      event.preventDefault();
      onCreate ? searchCallback && searchCallback(val) : updateTagList(val);
    }
  };

  const onInputChange = (event) => {
    const val = event.target.value;
    setInputValue(val);
    searchCallback && searchCallback(val);
  };

  return (
    <Container ref={dropdownRef}>
      <Root
        onClick={() => {
          options && setDropdownIsOpen(true);
          inputRef.current.focus();
        }}
      >
        <Field>
          {singleSelection && inputValue
            ? null
            : tagList.map((tag, idx) => (
                <Tag
                  key={tag}
                  type={tagType}
                  icon={tag?.picture || fallbackIcon}
                  label={tag?.label || tag}
                  remove={removeSingleTag(idx)}
                />
              ))}
          <Input
            ref={inputRef}
            type="text"
            value={inputValue}
            name={name}
            placeholder={tagList.length === 0 ? placeholder : ""}
            autoComplete="off"
            onKeyDown={inputKeyDown}
            onChange={onInputChange}
          />
        </Field>
      </Root>
      {options && dropdownIsOpen && inputValue !== "" && (
        <Dropdown>
          <OptionList>
            {isLoading ? (
              <Option dim noHighlight>
                Loading options...
              </Option>
            ) : options.length === 0 ? (
              <Option
                noHighlight={!Boolean(onCreate)}
                onClick={() => onCreate(inputValue)}
              >
                {onCreate ? `Create a tag for ${inputValue}` : "No results"}
              </Option>
            ) : (
              options.map((option) => (
                <Option
                  key={option.key}
                  onClick={() => {
                    setTagList((current) =>
                      singleSelection ? [option] : [...current, option]
                    );
                    setDropdownIsOpen(false);
                    setInputValue("");
                  }}
                >
                  <OptionIcon image={option.picture} Fallback={fallbackIcon} />
                  {option.label}
                </Option>
              ))
            )}
          </OptionList>
        </Dropdown>
      )}
    </Container>
  );
};

const Container = tw.div`
  relative
  w-full
`;

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

const Field = tw.div`
  relative
  py-1
  flex
  items-center
  flex-wrap
  w-full
`;

const Input = tw.input`
  font-body
  flex-grow
  border-transparent
  outline-none
  focus:outline-none
  focus:border-transparent
  focus:ring-0
  mx-auto
  h-10
`;

const Dropdown = tw.div`
  absolute
  mt-1
  w-full
  rounded-md
  bg-white
  shadow-lg
  border
  border-grey-light
  z-10
`;

const OptionList = tw.ul`
  max-h-56
  rounded-md
  py-1
  font-body
  text-base
  ring-1
  ring-grey
  ring-opacity-5
  overflow-auto
  focus:outline-none
`;

const Option = styled.li(({ dim, noHighlight }) => [
  dim ? tw`text-grey` : tw`text-grey-darker`,
  noHighlight ? tw`select-none` : tw`hover:bg-grey-lighter cursor-pointer`,
  tw`
    relative
    p-2
    flex
    justify-start
    items-center
`,
]);

export default TagInput;
