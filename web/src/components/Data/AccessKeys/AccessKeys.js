import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/AccessKeysCell";

const DELETE_ACCESS_KEY_MUTATION = gql`
  mutation DeleteAccessKeyMutation($id: Int!) {
    deleteAccessKey(id: $id) {
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

const AccessKeysList = ({ accessKeys }) => {
  const { addMessage } = useFlash();
  const [deleteAccessKey] = useMutation(DELETE_ACCESS_KEY_MUTATION, {
    onCompleted: () => {
      addMessage("AccessKey deleted.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete accessKey " + id + "?")) {
      deleteAccessKey({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Key</th>
            <th>Owner id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Removed at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {accessKeys.map((accessKey) => (
            <tr key={accessKey.id}>
              <td>{truncate(accessKey.id)}</td>
              <td>{truncate(accessKey.key)}</td>
              <td>{truncate(accessKey.ownerId)}</td>
              <td>{timeTag(accessKey.createdAt)}</td>
              <td>{timeTag(accessKey.updatedAt)}</td>
              <td>{timeTag(accessKey.removedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDataAccessKey({ id: accessKey.id })}
                    title={"Show accessKey " + accessKey.id + " detail"}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminDataEditAccessKey({ id: accessKey.id })}
                    title={"Edit accessKey " + accessKey.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={"Delete accessKey " + accessKey.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(accessKey.id)}
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

export default AccessKeysList;
