import CecilianTagsLayout from "src/layouts/Data/CecilianTagsLayout";
import CecilianTagCell from "src/components/Data/CecilianTagCell";

const CecilianTagPage = ({ id }) => {
  return (
    <CecilianTagsLayout>
      <CecilianTagCell id={id} />
    </CecilianTagsLayout>
  );
};

export default CecilianTagPage;
