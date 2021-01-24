import { useEffect, useRef, useState } from "react";
import tw, { styled } from "twin.macro";
import Tag from "../Tag/Tag";
import useClickOutside from "src/utils/useClickOutside";
import Logo from "src/assets/svg/logo.svg";
import AnimatedLogo from "src/components/chrome/AnimatedLogo/AnimatedLogo";
import { IoMdPricetag } from "react-icons/io";
import tagColorMap from "../tagColorMap";

const OptionIcon = ({ image, Fallback, tagType }) => {
  if (image) {
    return (
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
    );
  }
  if (Fallback) {
    const color = tagType ? tagColorMap[tagType].icon : tw`text-deepBlue`;
    return (
      <ImageWrapper color={color}>
        <Fallback size="1.25em" /> {/* i.e. w-6 */}
      </ImageWrapper>
    );
  }
  return null;
};
const ImageWrapper = styled.div(({ color }) => [
  color,
  tw`w-6
  flex
  justify-center
  items-center
  ml-1
  mr-4`,
]);
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
  isCreating,
  loadError,
  createError,
  searchCallback,
  onCreate,
  freeTagging = false,
  singleSelection,
  tagType,
}) => {
  const inputRef = useRef();
  const dropdownRef = useRef();
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  useClickOutside(dropdownRef, dropdownIsOpen, () => {
    setDropdownIsOpen(false);
    singleSelection && setInputValue("");
  });

  const [showErrorMessage, setShowErrorMessage] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setShowErrorMessage(false), 5000);
    return () => clearTimeout(id);
  }, [showErrorMessage, createError]);

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
      freeTagging ? updateTagList(val) : searchCallback && searchCallback(val);
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
                  key={tag.key || tag}
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
            placeholder={
              !singleSelection || tagList.length === 0 ? placeholder : ""
            }
            autoComplete="off"
            onKeyDown={inputKeyDown}
            onChange={onInputChange}
            collapse={singleSelection && tagList.length !== 0 && !inputValue}
          />
          {isCreating && (
            <CreatingIcon>
              <AnimatedLogo width="1.5em" />
            </CreatingIcon>
          )}
        </Field>
      </Root>
      {createError && showErrorMessage && (
        <ErrorMessage>
          Couldn't create a tag{inputValue ? ` for ${inputValue}` : ""}. Are you
          offline?
        </ErrorMessage>
      )}
      {options && dropdownIsOpen && inputValue !== "" && (
        <Dropdown>
          <OptionList>
            {isLoading ? (
              <Option dim noHighlight>
                <LoadingIcon>
                  <AnimatedLogo width="1.5em" />
                </LoadingIcon>
                Loading options...
              </Option>
            ) : loadError ? (
              <Option error noHighlight>
                <LoadingIcon>
                  <StaticLogo />
                </LoadingIcon>
                Could not load options. Press Enter to try again.
              </Option>
            ) : options.length === 0 ? (
              <Option
                actionable={Boolean(onCreate)}
                noHighlight={!Boolean(onCreate)}
                onClick={() => {
                  onCreate(inputValue);
                  setDropdownIsOpen(false);
                }}
              >
                <OptionIcon
                  Fallback={onCreate ? IoMdPricetag : fallbackIcon}
                  tagType={onCreate ? null : tagType}
                />
                {onCreate ? `Create a tag for ${inputValue}` : "No results"}
              </Option>
            ) : (
              options.map((option) => {
                const isAlreadySelected = !singleSelection && option.selected;
                return (
                  <Option
                    key={option.key}
                    fade={isAlreadySelected}
                    noHighlight={isAlreadySelected}
                    onClick={() => {
                      if (isAlreadySelected) return false;
                      setTagList((current) =>
                        singleSelection ? [option] : [...current, option]
                      );
                      setDropdownIsOpen(false);
                      setInputValue("");
                    }}
                  >
                    <OptionIcon
                      image={option.picture}
                      Fallback={fallbackIcon}
                      tagType={tagType}
                    />
                    {option.label}
                  </Option>
                );
              })
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

const Input = styled.input(({ collapse }) => [
  collapse ? tw`w-0 focus:flex-grow` : tw`flex-grow`,
  tw`
  font-body
  border-transparent
  outline-none
  focus:outline-none
  focus:border-transparent
  focus:ring-0
  mx-auto
  h-10`,
]);

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

const Option = styled.li(({ dim, actionable, error, noHighlight, fade }) => [
  dim
    ? tw`text-grey`
    : actionable
    ? tw`text-deepBlue`
    : error
    ? tw`text-deepRed`
    : tw`text-grey-darker`,
  noHighlight ? tw`select-none` : tw`hover:bg-grey-lighter cursor-pointer`,
  fade && tw`opacity-50`,
  tw`
    relative
    p-2
    flex
    justify-start
    items-center
`,
]);

const LoadingIcon = tw.div`
  w-6
  ml-1
  mr-4
`;

const CreatingIcon = tw.div`
  w-6
  h-full
  absolute
  right-4
  z-10
  flex
  flex-col
  justify-center
  items-center
`;

const StaticLogo = tw(Logo)`
  w-6
  h-6
`;

const ErrorMessage = tw.span`
  block
  font-body
  text-deepRed
  mt-1
`;

export default TagInput;
