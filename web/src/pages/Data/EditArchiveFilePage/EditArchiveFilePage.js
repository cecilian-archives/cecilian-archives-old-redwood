import ArchiveFilesLayout from "src/layouts/Data/ArchiveFilesLayout";
import EditArchiveFileCell from "src/components/Data/EditArchiveFileCell";

const EditArchiveFilePage = ({ id }) => {
  return (
    <ArchiveFilesLayout>
      <EditArchiveFileCell id={id} />
    </ArchiveFilesLayout>
  );
};

export default EditArchiveFilePage;
