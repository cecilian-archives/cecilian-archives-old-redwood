import { Link, routes } from "@redwoodjs/router";
import {
  EuiTitle,
  EuiText,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiButton,
} from "@elastic/eui";
import PageLayout from "src/layouts/PageLayout/PageLayout";

const MyProfilePage = () => {
  return (
    <PageLayout>
      <EuiTitle>
        <h1>Your Profile</h1>
      </EuiTitle>
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
