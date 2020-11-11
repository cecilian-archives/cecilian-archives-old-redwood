import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/ArchiveItemCeciliansCell";

const DELETE_ARCHIVE_ITEM_CECILIAN_MUTATION = gql`
  mutation DeleteArchiveItemCecilianMutation($id: Int!) {
    deleteArchiveItemCecilian(id: $id) {
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

const ArchiveItemCecilian = ({ archiveItemCecilian }) => {
  const { addMessage } = useFlash();
  const [deleteArchiveItemCecilian] = useMutation(
    DELETE_ARCHIVE_ITEM_CECILIAN_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataArchiveItemCecilians());
        addMessage("ArchiveItemCecilian deleted.", {
          classes: "rw-flash-success",
        });
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
      confirm("Are you sure you want to delete archiveItemCecilian " + id + "?")
    ) {
      deleteArchiveItemCecilian({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ArchiveItemCecilian {archiveItemCecilian.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{archiveItemCecilian.id}</td>
            </tr>
            <tr>
              <th>Cecilian id</th>
              <td>{archiveItemCecilian.cecilianId}</td>
            </tr>
            <tr>
              <th>Item id</th>
              <td>{archiveItemCecilian.itemId}</td>
            </tr>
            <tr>
              <th>Added at</th>
              <td>{timeTag(archiveItemCecilian.addedAt)}</td>
            </tr>
            <tr>
              <th>Removed at</th>
              <td>{timeTag(archiveItemCecilian.removedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditArchiveItemCecilian({
            id: archiveItemCecilian.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(archiveItemCecilian.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default ArchiveItemCecilian;
