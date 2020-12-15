import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
} from "@elastic/eui";
import styled from "styled-components";
import ChromeLayout from "src/layouts/ChromeLayout/ChromeLayout";

const PageLayout = ({ headerTitle, children, minimalChrome, noPadding }) => {
  return (
    <ChromeLayout headerTitle={headerTitle} minimal={minimalChrome}>
      <EuiPage>
        <EuiPageBody component="div">
          <PageContent $noPadding={noPadding}>
            <EuiPageContentBody>{children}</EuiPageContentBody>
          </PageContent>
        </EuiPageBody>
      </EuiPage>
    </ChromeLayout>
  );
};

const PageContent = styled(EuiPageContent)`
  padding: ${({ theme, $noPadding }) => ($noPadding ? 0 : theme.euiSizeL)};
`;

export default PageLayout;
