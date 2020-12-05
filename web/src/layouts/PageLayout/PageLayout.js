import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
} from "@elastic/eui";
import ChromeLayout from "src/layouts/ChromeLayout/ChromeLayout";

const PageLayout = ({ children, minimalChrome }) => {
  return (
    <ChromeLayout minimal={minimalChrome}>
      <EuiPage>
        <EuiPageBody component="div">
          <EuiPageContent>
            <EuiPageContentBody>{children}</EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </ChromeLayout>
  );
};

export default PageLayout;
