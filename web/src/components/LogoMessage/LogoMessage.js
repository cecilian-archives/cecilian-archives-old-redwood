import tw from "twin.macro";
import Logo from "src/assets/svg/logo.svg";
import AnimatedLogo from "src/components/chrome/AnimatedLogo/AnimatedLogo";

const LogoMessage = ({ message, animated }) => {
  return (
    <Root>
      {animated ? <AnimatedLogo width="3rem" /> : <StaticLogo />}
      <SpacedTitle>{message}</SpacedTitle>
    </Root>
  );
};

const Root = tw.div`
  flex
  flex-col
  justify-center
  items-center
`;

const StaticLogo = tw(Logo)`
  w-12
  h-12
`;

const SpacedTitle = tw.h3`
  m-4
  font-title
  text-xl
`;

export default LogoMessage;
