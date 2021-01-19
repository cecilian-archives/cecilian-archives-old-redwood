import { useRef } from "react";
import { useAuth } from "@redwoodjs/auth";
import { navigate, routes } from "@redwoodjs/router";
// import {
//   EuiPage,
//   EuiPageBody,
//   EuiPageContent,
//   EuiPageContentBody,
// } from "@elastic/eui";
import animateScrollTo from "animated-scroll-to";
import HomeHero from "src/components/HomeHero/HomeHero";

const LandingLayout = ({ children }) => {
  const contentRef = useRef();
  const handleReadMoreClick = () => {
    animateScrollTo(contentRef.current, { speed: 1000 });
  };

  const { isAuthenticated, logIn } = useAuth();
  const handleGetStartedClick = () => {
    if (isAuthenticated) {
      navigate(routes.authKey());
      return true;
    } else {
      const searchParams = new URLSearchParams(window.location.search);
      logIn({
        appState: {
          targetUrl:
            searchParams.get("redirectTo") ||
            process.env.REDWOOD_ENV_DEFAULT_LOGIN_REDIRECT,
        },
      });
    }
  };
  return (
    <>
      <HomeHero
        handleReadMoreClick={handleReadMoreClick}
        handleGetStartedClick={handleGetStartedClick}
      />
      <div ref={contentRef}>{children}</div>
    </>
  );
};

export default LandingLayout;
