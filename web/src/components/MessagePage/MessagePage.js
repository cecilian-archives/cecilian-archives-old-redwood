import ChromeLayout from "src/layouts/ChromeLayout/ChromeLayout";
import LogoMessage from "src/components/LogoMessage/LogoMessage";
import { EuiText } from "@elastic/eui";
import styled from "styled-components";

const MessagePage = ({
  headerTitle,
  messageTitle,
  messageBody,
  animatedLogo,
}) => {
  return (
    <ChromeLayout headerTitle={headerTitle} center>
      <Page>
        <LogoMessage animated={animatedLogo} message={messageTitle} />
        {messageBody && <EuiText>{messageBody}</EuiText>}
      </Page>
    </ChromeLayout>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.euiColorLightestShade};
`;

export default MessagePage;
