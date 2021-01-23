import tw, { styled } from "twin.macro";
import Logo from "src/assets/svg/logo.svg";
import HeaderUserMenu from "./HeaderUserMenu";

const Header = ({ title, minimal = false }) => {
  return (
    <Root>
      <Section side="left">
        <HeaderLogo spacer={minimal} href="/">
          <SizedLogo />
        </HeaderLogo>
        {title && (
          <HeaderTitle>
            <h1>{title}</h1>
          </HeaderTitle>
        )}
      </Section>
      <Section side="right">
        <HeaderUserMenu />
      </Section>
    </Root>
  );
};

const Root = tw.div`
  h-16
  bg-deepBlue-90
  shadow
  flex
  items-center
`;

const Section = styled.div(({ side }) => [
  tw`h-full
  flex
  items-center
  flex-grow`,
  side === "left" && tw`justify-start`,
  side === "right" && tw`justify-end`,
]);

const HeaderLogo = styled.div(({ spacer }) => [
  tw`h-full
  p-4
  flex
  flex-col
  justify-center
  items-center
  hocus:bg-deepBlue-93
  cursor-pointer
  mr-1.5`,
  spacer && tw`ml-1.5`,
]);

const HeaderTitle = tw.div`
  font-title
  text-2xl
  text-white
  mr-3
`;

const SizedLogo = tw(Logo)`
  w-10
  h-10
`;

export default Header;
