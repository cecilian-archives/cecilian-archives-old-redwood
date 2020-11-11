import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/ArchiveItemsCell";

const DELETE_ARCHIVE_ITEM_MUTATION = gql`
  mutation DeleteArchiveItemMutation($id: Int!) {
    deleteArchiveItem(id: $id) {
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

const ArchiveItem = ({ archiveItem }) => {
  const { addMessage } = useFlash();
  const [deleteArchiveItem] = useMutation(DELETE_ARCHIVE_ITEM_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataArchiveItems());
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ArchiveItem {archiveItem.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{archiveItem.id}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{archiveItem.slug}</td>
            </tr>
            <tr>
              <th>Archive ref</th>
              <td>{archiveItem.archiveRef}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{archiveItem.type}</td>
            </tr>
            <tr>
              <th>Associated date</th>
              <td>{timeTag(archiveItem.associatedDate)}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{archiveItem.notes}</td>
            </tr>
            <tr>
              <th>Author id</th>
              <td>{archiveItem.authorId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(archiveItem.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(archiveItem.updatedAt)}</td>
            </tr>
            <tr>
              <th>Deleted at</th>
              <td>{timeTag(archiveItem.deletedAt)}</td>
            </tr>
            <tr>
              <th>Created by id</th>
              <td>{archiveItem.createdById}</td>
            </tr>
            <tr>
              <th>Updated by id</th>
              <td>{archiveItem.updatedById}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditArchiveItem({ id: archiveItem.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(archiveItem.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default ArchiveItem;
