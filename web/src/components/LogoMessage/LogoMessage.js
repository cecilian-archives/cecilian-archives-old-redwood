import styled from "styled-components";
import { EuiTitle } from "@elastic/eui";
import Logo from "src/assets/svg/logo.svg";
import AnimatedLogo from "src/components/AnimatedLogo/AnimatedLogo";

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

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StaticLogo = styled(Logo)`
  width: 3rem;
  height: 3rem;
`;

const SpacedTitle = styled(EuiTitle)`
  margin: ${({ theme }) => theme.euiSizeL};
`;

export default LogoMessage;
