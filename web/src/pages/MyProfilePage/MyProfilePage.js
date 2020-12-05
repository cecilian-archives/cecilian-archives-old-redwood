import { Link, routes } from "@redwoodjs/router";
import PageLayout from "src/layouts/PageLayout/PageLayout";

const MyProfilePage = () => {
  return (
    <PageLayout>
      <h1>MyProfilePage</h1>
      <p>
        Find me in <code>./web/src/pages/MyProfilePage/MyProfilePage.js</code>
      </p>
      <p>
        My default route is named <code>myProfile</code>, link to me with `
        <Link to={routes.myProfile()}>MyProfile</Link>`
      </p>
    </PageLayout>
  );
};

export default MyProfilePage;
