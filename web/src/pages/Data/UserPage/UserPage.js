import UsersLayout from "src/layouts/Data/UsersLayout";
import UserCell from "src/components/Data/UserCell";

const UserPage = ({ id }) => {
  return (
    <UsersLayout>
      <UserCell id={id} />
    </UsersLayout>
  );
};

export default UserPage;
