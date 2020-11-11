import ArchiveCollectionsLayout from "src/layouts/Data/ArchiveCollectionsLayout";
import ArchiveCollectionCell from "src/components/Data/ArchiveCollectionCell";

const ArchiveCollectionPage = ({ id }) => {
  return (
    <ArchiveCollectionsLayout>
      <ArchiveCollectionCell id={id} />
    </ArchiveCollectionsLayout>
  );
};

export default ArchiveCollectionPage;
