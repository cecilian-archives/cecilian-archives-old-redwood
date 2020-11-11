import CeciliansLayout from "src/layouts/Data/CeciliansLayout";
import CecilianCell from "src/components/Data/CecilianCell";

const CecilianPage = ({ id }) => {
  return (
    <CeciliansLayout>
      <CecilianCell id={id} />
    </CeciliansLayout>
  );
};

export default CecilianPage;
