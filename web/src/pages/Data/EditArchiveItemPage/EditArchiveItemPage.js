import ArchiveItemsLayout from "src/layouts/Data/ArchiveItemsLayout";
import EditArchiveItemCell from "src/components/Data/EditArchiveItemCell";

const EditArchiveItemPage = ({ id }) => {
  return (
    <ArchiveItemsLayout>
      <EditArchiveItemCell id={id} />
    </ArchiveItemsLayout>
  );
};

export default EditArchiveItemPage;
