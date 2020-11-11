import ArchiveItemTagsLayout from "src/layouts/Data/ArchiveItemTagsLayout";
import ArchiveItemTagCell from "src/components/Data/ArchiveItemTagCell";

const ArchiveItemTagPage = ({ id }) => {
  return (
    <ArchiveItemTagsLayout>
      <ArchiveItemTagCell id={id} />
    </ArchiveItemTagsLayout>
  );
};

export default ArchiveItemTagPage;
