// import {
//   EuiPage,
//   EuiPageBody,
//   EuiPageContent,
//   EuiPageContentBody,
// } from "@elastic/eui";
import styled from "styled-components";
import ChromeLayout from "src/layouts/ChromeLayout/ChromeLayout";

const PageLayout = ({ headerTitle, children, minimalChrome, noPadding }) => {
  return (
    <ChromeLayout headerTitle={headerTitle} minimal={minimalChrome}>
      <div>
        <div component="div">
          <PageContent $noPadding={noPadding}>{children}</PageContent>
        </div>
      </div>
    </ChromeLayout>
  );
};

const PageContent = styled.div`
  padding: ${({ theme, $noPadding }) => ($noPadding ? 0 : theme.euiSizeL)};
`;

export default PageLayout;
