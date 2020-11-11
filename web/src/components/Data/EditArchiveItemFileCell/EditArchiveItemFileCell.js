import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import ArchiveItemFileForm from "src/components/Data/ArchiveItemFileForm";

export const QUERY = gql`
  query FIND_ARCHIVE_ITEM_FILE_BY_ID($id: Int!) {
    archiveItemFile: archiveItemFile(id: $id) {
      id
      fileId
      itemId
      addedAt
      removedAt
    }
  }
`;
const UPDATE_ARCHIVE_ITEM_FILE_MUTATION = gql`
  mutation UpdateArchiveItemFileMutation(
    $id: Int!
    $input: UpdateArchiveItemFileInput!
  ) {
    updateArchiveItemFile(id: $id, input: $input) {
      id
      fileId
      itemId
      addedAt
      removedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ archiveItemFile }) => {
  const { addMessage } = useFlash();
  const [updateArchiveItemFile, { loading, error }] = useMutation(
    UPDATE_ARCHIVE_ITEM_FILE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataArchiveItemFiles());
        addMessage("ArchiveItemFile updated.", { classes: "rw-flash-success" });
      },
    }
  );

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      fileId: parseInt(input.fileId),
      itemId: parseInt(input.itemId),
    });
    updateArchiveItemFile({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ArchiveItemFile {archiveItemFile.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ArchiveItemFileForm
          archiveItemFile={archiveItemFile}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
