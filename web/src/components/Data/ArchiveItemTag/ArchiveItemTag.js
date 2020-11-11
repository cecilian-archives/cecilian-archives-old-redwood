import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/ArchiveItemTagsCell";

const DELETE_ARCHIVE_ITEM_TAG_MUTATION = gql`
  mutation DeleteArchiveItemTagMutation($id: Int!) {
    deleteArchiveItemTag(id: $id) {
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

const ArchiveItemTag = ({ archiveItemTag }) => {
  const { addMessage } = useFlash();
  const [deleteArchiveItemTag] = useMutation(DELETE_ARCHIVE_ITEM_TAG_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataArchiveItemTags());
      addMessage("ArchiveItemTag deleted.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete archiveItemTag " + id + "?")) {
      deleteArchiveItemTag({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ArchiveItemTag {archiveItemTag.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{archiveItemTag.id}</td>
            </tr>
            <tr>
              <th>Item id</th>
              <td>{archiveItemTag.itemId}</td>
            </tr>
            <tr>
              <th>Tag id</th>
              <td>{archiveItemTag.tagId}</td>
            </tr>
            <tr>
              <th>Added at</th>
              <td>{timeTag(archiveItemTag.addedAt)}</td>
            </tr>
            <tr>
              <th>Removed at</th>
              <td>{timeTag(archiveItemTag.removedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditArchiveItemTag({ id: archiveItemTag.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(archiveItemTag.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default ArchiveItemTag;
