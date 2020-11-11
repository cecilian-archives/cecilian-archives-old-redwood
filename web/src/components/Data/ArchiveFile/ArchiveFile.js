import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/ArchiveFilesCell";

const DELETE_ARCHIVE_FILE_MUTATION = gql`
  mutation DeleteArchiveFileMutation($id: Int!) {
    deleteArchiveFile(id: $id) {
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

const ArchiveFile = ({ archiveFile }) => {
  const { addMessage } = useFlash();
  const [deleteArchiveFile] = useMutation(DELETE_ARCHIVE_FILE_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataArchiveFiles());
      addMessage("ArchiveFile deleted.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete archiveFile " + id + "?")) {
      deleteArchiveFile({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ArchiveFile {archiveFile.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{archiveFile.id}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{archiveFile.slug}</td>
            </tr>
            <tr>
              <th>Kind</th>
              <td>{archiveFile.kind}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{archiveFile.name}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{archiveFile.notes}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{archiveFile.url}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(archiveFile.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(archiveFile.updatedAt)}</td>
            </tr>
            <tr>
              <th>Deleted at</th>
              <td>{timeTag(archiveFile.deletedAt)}</td>
            </tr>
            <tr>
              <th>Deleted by id</th>
              <td>{archiveFile.deletedById}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditArchiveFile({ id: archiveFile.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(archiveFile.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default ArchiveFile;
