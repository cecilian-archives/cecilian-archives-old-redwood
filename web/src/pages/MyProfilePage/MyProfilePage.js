import { Link, routes } from "@redwoodjs/router";
import { useAuth } from "@redwoodjs/auth";

const MyProfilePage = () => {
  const { loading: authLoading, currentUser } = useAuth();
  if (authLoading) return <LoadingScreen />;
  console.log(currentUser);

  return (
    <>
      <h1>MyProfilePage</h1>
      <p>
        Find me in <code>./web/src/pages/MyProfilePage/MyProfilePage.js</code>
      </p>
      <p>
        My default route is named <code>myProfile</code>, link to me with `
        <Link to={routes.myProfile()}>MyProfile</Link>`
      </p>
    </>
  );
};

export default MyProfilePage;
