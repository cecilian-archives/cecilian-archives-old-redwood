import { useAuth } from "@redwoodjs/auth";
import { Redirect, routes } from "@redwoodjs/router";
import LoadingScreen from "src/components/LoadingScreen/LoadingScreen";

const AuthLoginPage = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <LoadingScreen />
      {currentUser?.slug && <Redirect to={routes.authKey()} />}
    </>
  );
};

export default AuthLoginPage;
