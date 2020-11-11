import UserContactsLayout from "src/layouts/Data/UserContactsLayout";
import UserContactCell from "src/components/Data/UserContactCell";

const UserContactPage = ({ id }) => {
  return (
    <UserContactsLayout>
      <UserContactCell id={id} />
    </UserContactsLayout>
  );
};

export default UserContactPage;
