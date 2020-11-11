import ArchiveItemTagsLayout from "src/layouts/Data/ArchiveItemTagsLayout";
import EditArchiveItemTagCell from "src/components/Data/EditArchiveItemTagCell";

const EditArchiveItemTagPage = ({ id }) => {
  return (
    <ArchiveItemTagsLayout>
      <EditArchiveItemTagCell id={id} />
    </ArchiveItemTagsLayout>
  );
};

export default EditArchiveItemTagPage;
