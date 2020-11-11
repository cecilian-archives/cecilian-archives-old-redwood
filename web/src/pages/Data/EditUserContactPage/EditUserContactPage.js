import UserContactsLayout from "src/layouts/Data/UserContactsLayout";
import EditUserContactCell from "src/components/Data/EditUserContactCell";

const EditUserContactPage = ({ id }) => {
  return (
    <UserContactsLayout>
      <EditUserContactCell id={id} />
    </UserContactsLayout>
  );
};

export default EditUserContactPage;
