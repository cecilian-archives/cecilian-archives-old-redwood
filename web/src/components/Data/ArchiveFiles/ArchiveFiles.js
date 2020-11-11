import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/ArchiveFilesCell";

const DELETE_ARCHIVE_FILE_MUTATION = gql`
  mutation DeleteArchiveFileMutation($id: Int!) {
    deleteArchiveFile(id: $id) {
      id
    }
  }
`;

const MAX_STRING_LENGTH = 150;

const truncate = (text) => {
  let output = text;
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + "...";
  }
  return output;
};

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2));
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

const ArchiveFilesList = ({ archiveFiles }) => {
  const { addMessage } = useFlash();
  const [deleteArchiveFile] = useMutation(DELETE_ARCHIVE_FILE_MUTATION, {
    onCompleted: () => {
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Slug</th>
            <th>Kind</th>
            <th>Name</th>
            <th>Notes</th>
            <th>Url</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Deleted at</th>
            <th>Deleted by id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {archiveFiles.map((archiveFile) => (
            <tr key={archiveFile.id}>
              <td>{truncate(archiveFile.id)}</td>
              <td>{truncate(archiveFile.slug)}</td>
              <td>{truncate(archiveFile.kind)}</td>
              <td>{truncate(archiveFile.name)}</td>
              <td>{truncate(archiveFile.notes)}</td>
              <td>{truncate(archiveFile.url)}</td>
              <td>{timeTag(archiveFile.createdAt)}</td>
              <td>{timeTag(archiveFile.updatedAt)}</td>
              <td>{timeTag(archiveFile.deletedAt)}</td>
              <td>{truncate(archiveFile.deletedById)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDataArchiveFile({ id: archiveFile.id })}
                    title={"Show archiveFile " + archiveFile.id + " detail"}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminDataEditArchiveFile({ id: archiveFile.id })}
                    title={"Edit archiveFile " + archiveFile.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={"Delete archiveFile " + archiveFile.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(archiveFile.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArchiveFilesList;
