import ArchiveItemFilesLayout from "src/layouts/Data/ArchiveItemFilesLayout";
import EditArchiveItemFileCell from "src/components/Data/EditArchiveItemFileCell";

const EditArchiveItemFilePage = ({ id }) => {
  return (
    <ArchiveItemFilesLayout>
      <EditArchiveItemFileCell id={id} />
    </ArchiveItemFilesLayout>
  );
};

export default EditArchiveItemFilePage;
