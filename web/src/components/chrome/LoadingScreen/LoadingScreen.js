import tw from "twin.macro";
import AnimatedLogo from "src/components/chrome/AnimatedLogo/AnimatedLogo";

const LoadingScreen = () => {
  return (
    <ScreenWrapper>
      <AnimatedLogo />
    </ScreenWrapper>
  );
};

const ScreenWrapper = tw.div`
  w-screen
  min-h-screen
  bg-hero-gradient
  bg-center
  flex
  flex-col
  justify-center
  items-center
  p-8
  border-b-8
  border-brightYellow
`;

export default LoadingScreen;
