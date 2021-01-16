import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiTitle,
} from "@elastic/eui";
import styled from "styled-components";
import { transparentize } from "polished";
import Logo from "src/assets/svg/logo.svg";
import HeaderUserMenu from "./HeaderUserMenu";
import HeaderAppMenu from "./HeaderAppMenu";

const Header = ({ title, minimal = false }) => {
  return (
    <StyledHeader position="fixed">
      <EuiHeaderSection grow={minimal}>
        {/* {!minimal && (
          <EuiHeaderSectionItem border="right">
            <HeaderAppMenu />
          </EuiHeaderSectionItem>
        )} */}
        <EuiHeaderSectionItem border="right">
          <HeaderLogo
            $spacer={minimal}
            iconType={Logo32}
            href="/"
            onClick={(e) => e.preventDefault()}
            aria-label="Go to home page"
          />
          {title && (
            <HeaderTitle size="s">
              <h1>{title}</h1>
            </HeaderTitle>
          )}
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
      <EuiHeaderSection side="right">
        <EuiHeaderSectionItem>
          <HeaderUserMenu />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </StyledHeader>
  );
};

const StyledHeader = styled(EuiHeader)`
  height: 60px;
  background: ${({ theme }) => theme.archive.blueShades[90]};
  border-bottom: none;
  box-shadow: 0px 3px 3px
    ${({ theme }) => transparentize(0.85, theme.archive.shades.darkest)};
`;

const HeaderLogo = styled(EuiHeaderLogo)`
  height: 60px;
  min-width: 60px;
  margin-left: ${({ $spacer }) => ($spacer ? "6px" : 0)};
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.archive.blueShades[93]};
  }
`;

const HeaderTitle = styled(EuiTitle)`
  color: ${({ theme }) => theme.archive.shades.empty};
  margin-right: 12px;
`;

const Logo32 = styled(Logo)`
  width: 32px;
  height: 32px;
`;

export default Header;
