import tw, { styled } from "twin.macro";
import Logo from "src/assets/svg/logo.svg";
import HeaderUserMenu from "./HeaderUserMenu";

const Header = ({ title, minimal = false }) => {
  return (
    <StyledHeader>
      <div>
        <HeaderLogo
          spacer={minimal}
          iconType={Logo32}
          href="/"
          onClick={(e) => e.preventDefault()}
          aria-label="Go to home page"
        />
        {title && (
          <HeaderTitle>
            <h1>{title}</h1>
          </HeaderTitle>
        )}
      </div>
      <div>
        <HeaderUserMenu />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = tw.div`
  h-16
  bg-deepBlue-90
  shadow
`;

const HeaderLogo = styled.div(({ spacer }) => [
  tw`h-16 hocus:bg-deepBlue-93`,
  spacer && tw`ml-1.5`,
]);

const HeaderTitle = tw.div`
  text-white
  mr-3
`;

const Logo32 = tw(Logo)`
  w-8
  h-8
`;

export default Header;
