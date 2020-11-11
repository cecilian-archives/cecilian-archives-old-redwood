import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/ArchiveItemFilesCell";

const DELETE_ARCHIVE_ITEM_FILE_MUTATION = gql`
  mutation DeleteArchiveItemFileMutation($id: Int!) {
    deleteArchiveItemFile(id: $id) {
      id
    }
  }
`;

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
};

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  );
};

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />;
};

const ArchiveItemFile = ({ archiveItemFile }) => {
  const { addMessage } = useFlash();
  const [deleteArchiveItemFile] = useMutation(
    DELETE_ARCHIVE_ITEM_FILE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataArchiveItemFiles());
        addMessage("ArchiveItemFile deleted.", { classes: "rw-flash-success" });
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  );

  const onDeleteClick = (id) => {
    if (
      confirm("Are you sure you want to delete archiveItemFile " + id + "?")
    ) {
      deleteArchiveItemFile({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ArchiveItemFile {archiveItemFile.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{archiveItemFile.id}</td>
            </tr>
            <tr>
              <th>File id</th>
              <td>{archiveItemFile.fileId}</td>
            </tr>
            <tr>
              <th>Item id</th>
              <td>{archiveItemFile.itemId}</td>
            </tr>
            <tr>
              <th>Added at</th>
              <td>{timeTag(archiveItemFile.addedAt)}</td>
            </tr>
            <tr>
              <th>Removed at</th>
              <td>{timeTag(archiveItemFile.removedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditArchiveItemFile({ id: archiveItemFile.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(archiveItemFile.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default ArchiveItemFile;
