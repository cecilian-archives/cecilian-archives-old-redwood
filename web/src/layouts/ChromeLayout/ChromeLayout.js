import styled from "styled-components";
import { useAuth } from "@redwoodjs/auth";
import { usePageLoadingContext } from "@redwoodjs/router";
import LoadingToast from "src/components/LoadingToast/LoadingToast";
import LoadingScreen from "src/components/LoadingScreen/LoadingScreen";
import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";

const ChromeLayout = ({ headerTitle, children, minimal = false }) => {
  const { loading: authLoading } = useAuth();
  const { loading: pageLoading } = usePageLoadingContext();
  if (authLoading) return <LoadingScreen />;

  return (
    <>
      <Header title={headerTitle} minimal={minimal} />
      <Main>{children}</Main>
      <Footer />
      {pageLoading && <LoadingToast />}
    </>
  );
};

const Main = styled.main`
  padding: 61px 0 0 0;
  min-height: calc(100vh - 55px);
  @media (max-width: ${({ theme }) => theme.euiBreakpoints.m}) {
    min-height: calc(100vh - 105px);
  }
`;

export default ChromeLayout;
