import AccessKeysLayout from "src/layouts/Data/AccessKeysLayout";
import AccessKeyCell from "src/components/Data/AccessKeyCell";

const AccessKeyPage = ({ id }) => {
  return (
    <AccessKeysLayout>
      <AccessKeyCell id={id} />
    </AccessKeysLayout>
  );
};

export default AccessKeyPage;
