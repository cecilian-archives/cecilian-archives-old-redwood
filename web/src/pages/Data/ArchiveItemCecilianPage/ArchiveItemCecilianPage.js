import ArchiveItemCeciliansLayout from "src/layouts/Data/ArchiveItemCeciliansLayout";
import ArchiveItemCecilianCell from "src/components/Data/ArchiveItemCecilianCell";

const ArchiveItemCecilianPage = ({ id }) => {
  return (
    <ArchiveItemCeciliansLayout>
      <ArchiveItemCecilianCell id={id} />
    </ArchiveItemCeciliansLayout>
  );
};

export default ArchiveItemCecilianPage;
