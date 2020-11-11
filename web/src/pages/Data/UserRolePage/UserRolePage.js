import UserRolesLayout from "src/layouts/Data/UserRolesLayout";
import UserRoleCell from "src/components/Data/UserRoleCell";

const UserRolePage = ({ id }) => {
  return (
    <UserRolesLayout>
      <UserRoleCell id={id} />
    </UserRolesLayout>
  );
};

export default UserRolePage;
