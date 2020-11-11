import AccessKeysLayout from "src/layouts/Data/AccessKeysLayout";
import EditAccessKeyCell from "src/components/Data/EditAccessKeyCell";

const EditAccessKeyPage = ({ id }) => {
  return (
    <AccessKeysLayout>
      <EditAccessKeyCell id={id} />
    </AccessKeysLayout>
  );
};

export default EditAccessKeyPage;
