import ChromeLayout from "src/layouts/ChromeLayout/ChromeLayout";
import MyProfileCell from "src/components/MyProfileCell/MyProfileCell";
import ProfileEditor from "src/components/ProfileEditor/ProfileEditor";

export const MyProfile = ({ profile }) => {
  return (
    <ChromeLayout headerTitle="Your Profile">
      <ProfileEditor profile={profile} />
    </ChromeLayout>
  );
};

const MyProfilePage = () => <MyProfileCell />;

export default MyProfilePage;
