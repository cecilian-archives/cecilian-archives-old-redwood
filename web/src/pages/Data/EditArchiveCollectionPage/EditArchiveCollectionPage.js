import ArchiveCollectionsLayout from "src/layouts/Data/ArchiveCollectionsLayout";
import EditArchiveCollectionCell from "src/components/Data/EditArchiveCollectionCell";

const EditArchiveCollectionPage = ({ id }) => {
  return (
    <ArchiveCollectionsLayout>
      <EditArchiveCollectionCell id={id} />
    </ArchiveCollectionsLayout>
  );
};

export default EditArchiveCollectionPage;
