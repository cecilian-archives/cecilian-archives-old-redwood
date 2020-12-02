import styled from "styled-components";
import { transparentize } from "polished";
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
  background: linear-gradient(
    ${({ theme }) => {
      const base = transparentize(0.07, theme.archiveBaseColours.deepBlue);
      const top = transparentize(0.25, theme.archiveBaseColours.deepBlue);
      return `to top, ${base}, ${top}`;
    }}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.paddingSizes.xl};
  border-bottom: 2vh solid
    ${({ theme }) => theme.archiveBaseColours.brightYellow};
`;

export default LoadingScreen;
