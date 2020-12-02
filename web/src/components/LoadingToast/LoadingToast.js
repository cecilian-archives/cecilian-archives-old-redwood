import styled from "styled-components";
import { EuiToast, EuiTitle, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import AnimatedLogo from "src/components/AnimatedLogo/AnimatedLogo";

const LoadingToast = () => {
  return (
    <Positioner>
      <EuiToast color="primary">
        <EuiFlexGroup alignItems="center" responsive={false} gutterSize="none">
          <EuiFlexItem grow={false}>
            <AnimatedLogo width="2rem" />
          </EuiFlexItem>
          <EuiFlexItem>
            <SpacedTitle>
              <h3>Loading...</h3>
            </SpacedTitle>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiToast>
    </Positioner>
  );
};

const Positioner = styled.div`
  position: fixed;
  max-width: 90vw;
  width: 320px;
  right: ${({ theme }) => theme.euiSizeL};
  bottom: ${({ theme }) => theme.euiSizeXL};
`;

const SpacedTitle = styled(EuiTitle)`
  margin: 0 ${({ theme }) => theme.euiSizeL};
`;

export default LoadingToast;
