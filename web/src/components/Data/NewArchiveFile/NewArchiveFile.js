import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import ArchiveFileForm from "src/components/Data/ArchiveFileForm";

import { QUERY } from "src/components/Data/ArchiveFilesCell";

const CREATE_ARCHIVE_FILE_MUTATION = gql`
  mutation CreateArchiveFileMutation($input: CreateArchiveFileInput!) {
    createArchiveFile(input: $input) {
      id
    }
  }
`;

const NewArchiveFile = () => {
  const { addMessage } = useFlash();
  const [createArchiveFile, { loading, error }] = useMutation(
    CREATE_ARCHIVE_FILE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataArchiveFiles());
        addMessage("ArchiveFile created.", { classes: "rw-flash-success" });
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  );

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      deletedById: parseInt(input.deletedById),
    });
    createArchiveFile({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ArchiveFile</h2>
      </header>
      <div className="rw-segment-main">
        <ArchiveFileForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewArchiveFile;
