import ArchiveItemCeciliansLayout from "src/layouts/Data/ArchiveItemCeciliansLayout";
import EditArchiveItemCecilianCell from "src/components/Data/EditArchiveItemCecilianCell";

const EditArchiveItemCecilianPage = ({ id }) => {
  return (
    <ArchiveItemCeciliansLayout>
      <EditArchiveItemCecilianCell id={id} />
    </ArchiveItemCeciliansLayout>
  );
};

export default EditArchiveItemCecilianPage;
