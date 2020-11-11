import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/CollectionItemsCell";

const DELETE_COLLECTION_ITEM_MUTATION = gql`
  mutation DeleteCollectionItemMutation($id: Int!) {
    deleteCollectionItem(id: $id) {
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

const CollectionItem = ({ collectionItem }) => {
  const { addMessage } = useFlash();
  const [deleteCollectionItem] = useMutation(DELETE_COLLECTION_ITEM_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataCollectionItems());
      addMessage("CollectionItem deleted.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete collectionItem " + id + "?")) {
      deleteCollectionItem({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CollectionItem {collectionItem.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{collectionItem.id}</td>
            </tr>
            <tr>
              <th>Item id</th>
              <td>{collectionItem.itemId}</td>
            </tr>
            <tr>
              <th>Collection id</th>
              <td>{collectionItem.collectionId}</td>
            </tr>
            <tr>
              <th>Item index</th>
              <td>{collectionItem.itemIndex}</td>
            </tr>
            <tr>
              <th>Added by id</th>
              <td>{collectionItem.addedById}</td>
            </tr>
            <tr>
              <th>Added at</th>
              <td>{timeTag(collectionItem.addedAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(collectionItem.updatedAt)}</td>
            </tr>
            <tr>
              <th>Removed at</th>
              <td>{timeTag(collectionItem.removedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditCollectionItem({ id: collectionItem.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(collectionItem.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default CollectionItem;
