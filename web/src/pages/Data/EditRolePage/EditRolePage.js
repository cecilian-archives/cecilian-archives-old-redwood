import RolesLayout from "src/layouts/Data/RolesLayout";
import EditRoleCell from "src/components/Data/EditRoleCell";

const EditRolePage = ({ id }) => {
  return (
    <RolesLayout>
      <EditRoleCell id={id} />
    </RolesLayout>
  );
};

export default EditRolePage;
