import ArchiveFilesLayout from "src/layouts/Data/ArchiveFilesLayout";
import ArchiveFileCell from "src/components/Data/ArchiveFileCell";

const ArchiveFilePage = ({ id }) => {
  return (
    <ArchiveFilesLayout>
      <ArchiveFileCell id={id} />
    </ArchiveFilesLayout>
  );
};

export default ArchiveFilePage;
