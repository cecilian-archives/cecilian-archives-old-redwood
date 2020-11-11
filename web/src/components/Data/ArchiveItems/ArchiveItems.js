import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/ArchiveItemsCell";

const DELETE_ARCHIVE_ITEM_MUTATION = gql`
  mutation DeleteArchiveItemMutation($id: Int!) {
    deleteArchiveItem(id: $id) {
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

const ArchiveItemsList = ({ archiveItems }) => {
  const { addMessage } = useFlash();
  const [deleteArchiveItem] = useMutation(DELETE_ARCHIVE_ITEM_MUTATION, {
    onCompleted: () => {
      addMessage("ArchiveItem deleted.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete archiveItem " + id + "?")) {
      deleteArchiveItem({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Slug</th>
            <th>Archive ref</th>
            <th>Type</th>
            <th>Associated date</th>
            <th>Notes</th>
            <th>Author id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Deleted at</th>
            <th>Created by id</th>
            <th>Updated by id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {archiveItems.map((archiveItem) => (
            <tr key={archiveItem.id}>
              <td>{truncate(archiveItem.id)}</td>
              <td>{truncate(archiveItem.slug)}</td>
              <td>{truncate(archiveItem.archiveRef)}</td>
              <td>{truncate(archiveItem.type)}</td>
              <td>{timeTag(archiveItem.associatedDate)}</td>
              <td>{truncate(archiveItem.notes)}</td>
              <td>{truncate(archiveItem.authorId)}</td>
              <td>{timeTag(archiveItem.createdAt)}</td>
              <td>{timeTag(archiveItem.updatedAt)}</td>
              <td>{timeTag(archiveItem.deletedAt)}</td>
              <td>{truncate(archiveItem.createdById)}</td>
              <td>{truncate(archiveItem.updatedById)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDataArchiveItem({ id: archiveItem.id })}
                    title={"Show archiveItem " + archiveItem.id + " detail"}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminDataEditArchiveItem({ id: archiveItem.id })}
                    title={"Edit archiveItem " + archiveItem.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={"Delete archiveItem " + archiveItem.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(archiveItem.id)}
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

export default ArchiveItemsList;
