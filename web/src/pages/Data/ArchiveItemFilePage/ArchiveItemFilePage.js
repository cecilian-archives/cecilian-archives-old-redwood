import ArchiveItemFilesLayout from "src/layouts/Data/ArchiveItemFilesLayout";
import ArchiveItemFileCell from "src/components/Data/ArchiveItemFileCell";

const ArchiveItemFilePage = ({ id }) => {
  return (
    <ArchiveItemFilesLayout>
      <ArchiveItemFileCell id={id} />
    </ArchiveItemFilesLayout>
  );
};

export default ArchiveItemFilePage;
