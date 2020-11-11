import ArchiveItemsLayout from "src/layouts/Data/ArchiveItemsLayout";
import ArchiveItemCell from "src/components/Data/ArchiveItemCell";

const ArchiveItemPage = ({ id }) => {
  return (
    <ArchiveItemsLayout>
      <ArchiveItemCell id={id} />
    </ArchiveItemsLayout>
  );
};

export default ArchiveItemPage;
