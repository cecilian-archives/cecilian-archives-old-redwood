import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import ArchiveItemFileForm from "src/components/Data/ArchiveItemFileForm";

import { QUERY } from "src/components/Data/ArchiveItemFilesCell";

const CREATE_ARCHIVE_ITEM_FILE_MUTATION = gql`
  mutation CreateArchiveItemFileMutation($input: CreateArchiveItemFileInput!) {
    createArchiveItemFile(input: $input) {
      id
    }
  }
`;

const NewArchiveItemFile = () => {
  const { addMessage } = useFlash();
  const [createArchiveItemFile, { loading, error }] = useMutation(
    CREATE_ARCHIVE_ITEM_FILE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataArchiveItemFiles());
        addMessage("ArchiveItemFile created.", { classes: "rw-flash-success" });
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
      fileId: parseInt(input.fileId),
      itemId: parseInt(input.itemId),
    });
    createArchiveItemFile({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ArchiveItemFile</h2>
      </header>
      <div className="rw-segment-main">
        <ArchiveItemFileForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewArchiveItemFile;
