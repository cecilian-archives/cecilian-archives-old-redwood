import styled from "styled-components";
import AnimatedLogo from "src/components/AnimatedLogo/AnimatedLogo";

const LoadingScreen = () => {
  return (
    <ScreenWrapper>
      <AnimatedLogo />
    </ScreenWrapper>
  );
};

const ScreenWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.archive.blueScreenGradient(theme)},
    ${({ theme }) => theme.archive.shades.lightest};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.paddingSizes.xl};
  border-bottom: 2vh solid ${({ theme }) => theme.archive.brightYellow};
`;

export default LoadingScreen;
