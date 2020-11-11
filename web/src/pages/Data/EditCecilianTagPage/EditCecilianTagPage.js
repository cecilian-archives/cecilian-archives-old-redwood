import CecilianTagsLayout from "src/layouts/Data/CecilianTagsLayout";
import EditCecilianTagCell from "src/components/Data/EditCecilianTagCell";

const EditCecilianTagPage = ({ id }) => {
  return (
    <CecilianTagsLayout>
      <EditCecilianTagCell id={id} />
    </CecilianTagsLayout>
  );
};

export default EditCecilianTagPage;
