import styled from "styled-components";
import { useAuth } from "@redwoodjs/auth";
import { usePageLoadingContext } from "@redwoodjs/router";
// import LoadingToast from "src/components/LoadingToast/LoadingToast";
import LoadingScreen from "src/components/chrome/LoadingScreen/LoadingScreen";
import Header from "src/components/chrome/Header/Header";
import Footer from "src/components/chrome/Footer/Footer";

const ChromeLayout = ({ headerTitle, children, minimal = false, center }) => {
  const { loading: authLoading } = useAuth();
  const { loading: pageLoading } = usePageLoadingContext();
  if (authLoading) return <LoadingScreen />;

  return (
    <>
      <Header title={headerTitle} minimal={minimal} />
      <Main center={center}>{children}</Main>
      <Footer />
      {/* {pageLoading && <LoadingToast />} */}
    </>
  );
};

const Main = styled.main`
  padding: 61px 0 0 0;
  ${({ center }) =>
    center
      ? `display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`
      : ""}
`;

export default ChromeLayout;
