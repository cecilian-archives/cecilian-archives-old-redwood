import tw, { styled } from "twin.macro";

const typeColorMap = {
  cecilian: {
    root: tw`bg-transparent border-deepGreen`,
    label: tw`text-deepGreen`,
    button: tw`bg-deepGreen`,
    path: tw`text-white`,
  },
  default: {
    root: tw`bg-transparent border-grey`,
    label: tw`text-grey-darker`,
    button: tw`bg-deepBlue-85`,
    path: tw`text-white`,
  },
};

const Tag = ({ label, type, icon, remove }) => {
  const colors = typeColorMap[type] || typeColorMap.default;
  return (
    <Root $color={colors.root}>
      <Label $color={colors.label}>{label}</Label>
      <Button type="button" $color={colors.button} onClick={remove}>
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
  px-3
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
