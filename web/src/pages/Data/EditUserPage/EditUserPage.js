import UsersLayout from "src/layouts/Data/UsersLayout";
import EditUserCell from "src/components/Data/EditUserCell";

const EditUserPage = ({ id }) => {
  return (
    <UsersLayout>
      <EditUserCell id={id} />
    </UsersLayout>
  );
};

export default EditUserPage;
