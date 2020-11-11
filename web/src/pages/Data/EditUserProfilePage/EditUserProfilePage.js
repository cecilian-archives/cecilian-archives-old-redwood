import UserProfilesLayout from "src/layouts/Data/UserProfilesLayout";
import EditUserProfileCell from "src/components/Data/EditUserProfileCell";

const EditUserProfilePage = ({ id }) => {
  return (
    <UserProfilesLayout>
      <EditUserProfileCell id={id} />
    </UserProfilesLayout>
  );
};

export default EditUserProfilePage;
