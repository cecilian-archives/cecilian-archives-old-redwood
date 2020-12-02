import { EuiText, EuiButton, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import styled from "styled-components";
import { motion } from "framer-motion";
import { transparentize } from "polished";
import libraryImage from "src/assets/images/unsplash-PkbZahEG2Ng.jpg";
import Logo from "src/assets/svg/logo.svg";

const HomeHero = ({ handleReadMoreClick, handleGetStartedClick }) => {
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
        <ButtonGroup gutterSize="xl" alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiButton color="ghost" onClick={handleReadMoreClick}>
              Read More
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton color="ghost" fill onClick={handleGetStartedClick}>
              Get Started
            </EuiButton>
          </EuiFlexItem>
        </ButtonGroup>
      </Animate>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
      ${({ theme }) => {
        const base = transparentize(0.07, theme.archiveBaseColours.deepBlue);
        const top = transparentize(0.25, theme.archiveBaseColours.deepBlue);
        return `to top, ${base}, ${top}`;
      }}
    ),
    url(${libraryImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.paddingSizes.xl};
  border-bottom: 2vh solid
    ${({ theme }) => theme.archiveBaseColours.brightYellow};
`;

const SizedLogo = styled(Logo)`
  width: auto;
  max-width: 60px;
  max-height: 60px;
`;

const Welcome = styled(EuiText)`
  text-align: center;
  padding: ${({ theme }) => theme.paddingSizes.xl};
  h1 {
    color: ${({ theme }) => theme.euiColorGhost};
    font-size: 4.5rem;
    line-height: 5rem;
  }
  h2 {
    color: ${({ theme }) => theme.euiColorGhost};
    font-size: 2.5rem;
    line-height: 4rem;
    border-bottom: 1px solid
      ${({ theme }) => theme.archiveBaseColours.brightYellow};
  }
`;

const ButtonGroup = styled(EuiFlexGroup)`
  padding: ${({ theme }) => theme.paddingSizes.xl};
  flex-grow: 0;
`;

const Animate = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default HomeHero;
