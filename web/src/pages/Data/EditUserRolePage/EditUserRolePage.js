import UserRolesLayout from "src/layouts/Data/UserRolesLayout";
import EditUserRoleCell from "src/components/Data/EditUserRoleCell";

const EditUserRolePage = ({ id }) => {
  return (
    <UserRolesLayout>
      <EditUserRoleCell id={id} />
    </UserRolesLayout>
  );
};

export default EditUserRolePage;
