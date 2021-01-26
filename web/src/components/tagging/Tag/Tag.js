import tw, { styled } from "twin.macro";
import tagColorMap from "../tagColorMap";

const IconDisplay = ({ Icon, color }) => {
  if (typeof Icon === "string") {
    return (
      <ImageWrapper>
        <Image src={Icon} />
      </ImageWrapper>
    );
  }
  if (Icon) {
    return (
      <ImageWrapper $color={color}>
        <Icon size="1em" /> {/* i.e. w-4 */}
      </ImageWrapper>
    );
  }
  return null;
};
const ImageWrapper = styled.div(({ $color }) => [
  tw`w-4
  flex
  justify-center
  items-center
  text-deepBlue
  mr-2`,
  $color,
]);
const Image = tw.img`
  w-4
  h-4
  rounded-full
`;

const Tag = ({ label, type, icon, remove }) => {
  const colors = tagColorMap[type] || tagColorMap.default;
  const onClick = (event) => {
    event.stopPropagation();
    remove();
  };
  return (
    <Root $color={colors.root}>
      {icon && <IconDisplay Icon={icon} color={colors.icon} />}
      <Label $color={colors.label}>{label}</Label>
      <Button type="button" $color={colors.button} onClick={onClick}>
        <svg
          width="8"
          height="8"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path $color={colors.path} d="M1.5 1L8 7.5" strokeWidth="2" />
          <Path $color={colors.path} d="M8 1L1.5 7.5" strokeWidth="2" />
        </svg>
      </Button>
    </Root>
  );
};

const Root = styled.div(({ $color }) => [
  $color,
  tw`rounded-xl
  border
  px-2
  py-1
  ml-2
  my-1
  flex
  justify-between
  items-center`,
]);

const Label = styled.span(({ $color }) => [
  $color,
  tw`font-body
  text-sm`,
]);

const Button = styled.button(({ $color }) => [
  $color,
  tw`w-4
  h-4
  rounded-lg
  flex
  justify-center
  items-center
  ml-3
  cursor-pointer`,
]);

const Path = styled.path(({ $color }) => [$color, tw`stroke-current`]);

export default Tag;
