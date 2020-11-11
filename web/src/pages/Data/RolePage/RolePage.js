import RolesLayout from "src/layouts/Data/RolesLayout";
import RoleCell from "src/components/Data/RoleCell";

const RolePage = ({ id }) => {
  return (
    <RolesLayout>
      <RoleCell id={id} />
    </RolesLayout>
  );
};

export default RolePage;
