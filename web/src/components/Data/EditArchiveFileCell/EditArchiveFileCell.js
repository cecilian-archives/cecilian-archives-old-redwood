import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import ArchiveFileForm from "src/components/Data/ArchiveFileForm";

export const QUERY = gql`
  query FIND_ARCHIVE_FILE_BY_ID($id: Int!) {
    archiveFile: archiveFile(id: $id) {
      id
      slug
      kind
      name
      notes
      url
      createdAt
      updatedAt
      deletedAt
      deletedById
    }
  }
`;
const UPDATE_ARCHIVE_FILE_MUTATION = gql`
  mutation UpdateArchiveFileMutation(
    $id: Int!
    $input: UpdateArchiveFileInput!
  ) {
    updateArchiveFile(id: $id, input: $input) {
      id
      slug
      kind
      name
      notes
      url
      createdAt
      updatedAt
      deletedAt
      deletedById
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ archiveFile }) => {
  const { addMessage } = useFlash();
  const [updateArchiveFile, { loading, error }] = useMutation(
    UPDATE_ARCHIVE_FILE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataArchiveFiles());
        addMessage("ArchiveFile updated.", { classes: "rw-flash-success" });
      },
    }
  );

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      deletedById: parseInt(input.deletedById),
    });
    updateArchiveFile({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ArchiveFile {archiveFile.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ArchiveFileForm
          archiveFile={archiveFile}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
