import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
} from "@elastic/eui";
import styled from "styled-components";
import Logo from "src/assets/svg/logo.svg";
import HeaderUserMenu from "./HeaderUserMenu";
import HeaderAppMenu from "./HeaderAppMenu";

const Header = ({ minimal = false }) => {
  return (
    <StyledHeader position="fixed">
      <EuiHeaderSection grow={minimal}>
        {!minimal && (
          <EuiHeaderSectionItem border="right">
            <HeaderAppMenu />
          </EuiHeaderSectionItem>
        )}
        <EuiHeaderSectionItem border="none">
          <HeaderLogo
            $spacer={minimal}
            iconType={Logo32}
            href="/"
            onClick={(e) => e.preventDefault()}
            aria-label="Go to home page"
          />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>

      {!minimal && (
        <EuiHeaderSection side="right">
          <EuiHeaderSectionItem>
            <HeaderUserMenu />
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled(EuiHeader)`
  height: 60px;
  background: ${({ theme }) => theme.archive.blueShades[90]};
  border-bottom: none;
  box-shadow: none;
`;

const HeaderLogo = styled(EuiHeaderLogo)`
  height: 50px;
  min-width: 50px;
  margin-left: ${({ $spacer }) => ($spacer ? "6px" : 0)};
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.archive.blueShades[93]};
  }
`;

const Logo32 = styled(Logo)`
  width: 32px;
  height: 32px;
`;

export default Header;
