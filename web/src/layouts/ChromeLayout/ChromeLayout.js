import tw, { styled } from "twin.macro";
import { useAuth } from "@redwoodjs/auth";
// import { usePageLoadingContext } from "@redwoodjs/router";
// import LoadingToast from "src/components/LoadingToast/LoadingToast";
import LoadingScreen from "src/components/chrome/LoadingScreen/LoadingScreen";
import Header from "src/components/chrome/Header/Header";
import Footer from "src/components/chrome/Footer/Footer";

const ChromeLayout = ({ headerTitle, children, minimal = false, center }) => {
  const { loading: authLoading } = useAuth();
  // const { loading: pageLoading } = usePageLoadingContext();
  if (authLoading) return <LoadingScreen />;

  return (
    <Chrome>
      <Header title={headerTitle} minimal={minimal} />
      <Main center={center}>{children}</Main>
      <Footer />
      {/* {pageLoading && <LoadingToast />} */}
    </Chrome>
  );
};

const Chrome = tw.div`
  min-h-screen
  flex
  flex-col
`;

const Main = styled.main(({ center }) => [
  tw`flex-grow
  bg-grey-lighter
  py-12
  md:py-6
  px-4`,
  center &&
    tw`
    flex
    flex-col
    justify-center
    items-center
  `,
]);

export default ChromeLayout;
