import ChromeLayout from "src/layouts/ChromeLayout/ChromeLayout";
import LogoMessage from "src/components/LogoMessage/LogoMessage";
import tw, { styled } from "twin.macro";

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
        {messageBody && <span>{messageBody}</span>}
      </Page>
    </ChromeLayout>
  );
};

const Page = tw.div`
  flex
  flex-col
  justify-center
  items-center
  flex-grow
  w-full
  bg-grey-lighter
`;

export default MessagePage;
