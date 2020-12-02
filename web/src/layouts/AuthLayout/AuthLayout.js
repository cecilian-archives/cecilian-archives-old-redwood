import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
} from "@elastic/eui";
import { usePageLoadingContext } from "@redwoodjs/router";
import LoadingToast from "src/components/LoadingToast/LoadingToast";

const AuthLayout = ({ children }) => {
  const { loading } = usePageLoadingContext();
  return (
    <EuiPage>
      <EuiPageBody component="div">
        <EuiPageContent>
          <EuiPageContentBody>{children}</EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
      {loading && <LoadingToast />}
    </EuiPage>
  );
};

export default AuthLayout;
