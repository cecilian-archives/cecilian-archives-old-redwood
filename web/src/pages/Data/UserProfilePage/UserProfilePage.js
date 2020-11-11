import UserProfilesLayout from "src/layouts/Data/UserProfilesLayout";
import UserProfileCell from "src/components/Data/UserProfileCell";

const UserProfilePage = ({ id }) => {
  return (
    <UserProfilesLayout>
      <UserProfileCell id={id} />
    </UserProfilesLayout>
  );
};

export default UserProfilePage;
