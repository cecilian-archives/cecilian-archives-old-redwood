import CeciliansLayout from "src/layouts/Data/CeciliansLayout";
import EditCecilianCell from "src/components/Data/EditCecilianCell";

const EditCecilianPage = ({ id }) => {
  return (
    <CeciliansLayout>
      <EditCecilianCell id={id} />
    </CeciliansLayout>
  );
};

export default EditCecilianPage;
