import { useLayoutEffect } from "react";
import tw, { styled, theme } from "twin.macro";
import { motion } from "framer-motion";
import Button from "src/components/shared/Button/Button";
import libraryImage from "src/assets/images/unsplash-PkbZahEG2Ng.jpg";
import Logo from "src/assets/svg/logo.svg";

const HomeHero = ({ handleReadMoreClick, handleGetStartedClick }) => {
  useLayoutEffect(() => {
    // See https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <HeroContainer>
      <Animate
        animate={{ y: ["7%", "0%"], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
      >
        <SizedLogo />
        <Welcome>
          <h2>Welcome to the</h2>
          <h1>Cecilian Archives</h1>
        </Welcome>
      </Animate>
      <Animate
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        <ButtonGroup>
          {/* <Button type="secondary" size="large" onClick={handleReadMoreClick}>
            Read More
          </Button>
          <Button type="primary" size="large" onClick={handleGetStartedClick}>
            Get Started
          </Button> */}
          <HoldingText>Coming Soon</HoldingText>
        </ButtonGroup>
      </Animate>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  ${tw`w-screen
  min-h-screen
  bg-center
  bg-no-repeat
  bg-cover
  flex
  flex-col
  justify-center
  items-center
  p-8
  border-b-8
  border-brightYellow`}
  background-image: linear-gradient(
    to top,
    ${theme`colors.deepBlue.heroBase`},
    ${theme`colors.deepBlue.heroTop`}
  ),
  url(${libraryImage});
  min-height: calc(var(--vh, 1vh) * 100);
  /* See https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ */
`;

const SizedLogo = styled(Logo)`
  ${tw`w-auto
  max-h-14
  border
  border-deepBlue-105
  rounded-xl`}
`;

const Welcome = styled.div`
  ${tw`text-center
  p-8`}
  h1 {
    ${tw`font-title
    text-white
    text-7xl
    pt-3`}
  }
  h2 {
    ${tw`font-title
    text-white
    text-4xl
    border-b
    border-brightYellow
    pb-4`}
  }
`;

const ButtonGroup = tw.div`
  p-8
  flex-grow-0
  space-x-12
  md:py-8 md:px-0 md:max-w-full md:flex md:justify-between
`;

const HoldingText = tw.span`
  font-body
  text-center
  text-white
  text-2xl
`;

const Animate = tw(motion.div)`
  flex
  flex-col
  justify-center
  items-center
`;

export default HomeHero;
