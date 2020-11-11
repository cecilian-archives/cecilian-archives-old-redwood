import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/CollectionItemsCell";

const DELETE_COLLECTION_ITEM_MUTATION = gql`
  mutation DeleteCollectionItemMutation($id: Int!) {
    deleteCollectionItem(id: $id) {
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

const CollectionItemsList = ({ collectionItems }) => {
  const { addMessage } = useFlash();
  const [deleteCollectionItem] = useMutation(DELETE_COLLECTION_ITEM_MUTATION, {
    onCompleted: () => {
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Item id</th>
            <th>Collection id</th>
            <th>Item index</th>
            <th>Added by id</th>
            <th>Added at</th>
            <th>Updated at</th>
            <th>Removed at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {collectionItems.map((collectionItem) => (
            <tr key={collectionItem.id}>
              <td>{truncate(collectionItem.id)}</td>
              <td>{truncate(collectionItem.itemId)}</td>
              <td>{truncate(collectionItem.collectionId)}</td>
              <td>{truncate(collectionItem.itemIndex)}</td>
              <td>{truncate(collectionItem.addedById)}</td>
              <td>{timeTag(collectionItem.addedAt)}</td>
              <td>{timeTag(collectionItem.updatedAt)}</td>
              <td>{timeTag(collectionItem.removedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDataCollectionItem({
                      id: collectionItem.id,
                    })}
                    title={
                      "Show collectionItem " + collectionItem.id + " detail"
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminDataEditCollectionItem({
                      id: collectionItem.id,
                    })}
                    title={"Edit collectionItem " + collectionItem.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={"Delete collectionItem " + collectionItem.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(collectionItem.id)}
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

export default CollectionItemsList;
