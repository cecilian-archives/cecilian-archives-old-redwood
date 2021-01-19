import tw, { styled } from "twin.macro";
import Logo from "src/assets/svg/logo.svg";
import AnimatedLogo from "src/components/chrome/AnimatedLogo/AnimatedLogo";

const LogoMessage = ({ message, animated }) => {
  return (
    <Root>
      {animated ? <AnimatedLogo width="3rem" /> : <StaticLogo />}
      <SpacedTitle>
        <h3>{message}</h3>
      </SpacedTitle>
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

const SpacedTitle = tw.div`
  m-4
`;

export default LogoMessage;
