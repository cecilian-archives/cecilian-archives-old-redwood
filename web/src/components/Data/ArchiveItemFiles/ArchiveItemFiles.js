import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/ArchiveItemFilesCell";

const DELETE_ARCHIVE_ITEM_FILE_MUTATION = gql`
  mutation DeleteArchiveItemFileMutation($id: Int!) {
    deleteArchiveItemFile(id: $id) {
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

const ArchiveItemFilesList = ({ archiveItemFiles }) => {
  const { addMessage } = useFlash();
  const [deleteArchiveItemFile] = useMutation(
    DELETE_ARCHIVE_ITEM_FILE_MUTATION,
    {
      onCompleted: () => {
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>File id</th>
            <th>Item id</th>
            <th>Added at</th>
            <th>Removed at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {archiveItemFiles.map((archiveItemFile) => (
            <tr key={archiveItemFile.id}>
              <td>{truncate(archiveItemFile.id)}</td>
              <td>{truncate(archiveItemFile.fileId)}</td>
              <td>{truncate(archiveItemFile.itemId)}</td>
              <td>{timeTag(archiveItemFile.addedAt)}</td>
              <td>{timeTag(archiveItemFile.removedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDataArchiveItemFile({
                      id: archiveItemFile.id,
                    })}
                    title={
                      "Show archiveItemFile " + archiveItemFile.id + " detail"
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminDataEditArchiveItemFile({
                      id: archiveItemFile.id,
                    })}
                    title={"Edit archiveItemFile " + archiveItemFile.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={"Delete archiveItemFile " + archiveItemFile.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(archiveItemFile.id)}
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

export default ArchiveItemFilesList;
