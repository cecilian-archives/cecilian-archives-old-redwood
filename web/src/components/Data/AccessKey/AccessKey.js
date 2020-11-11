import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/AccessKeysCell";

const DELETE_ACCESS_KEY_MUTATION = gql`
  mutation DeleteAccessKeyMutation($id: Int!) {
    deleteAccessKey(id: $id) {
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

const AccessKey = ({ accessKey }) => {
  const { addMessage } = useFlash();
  const [deleteAccessKey] = useMutation(DELETE_ACCESS_KEY_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataAccessKeys());
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            AccessKey {accessKey.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{accessKey.id}</td>
            </tr>
            <tr>
              <th>Key</th>
              <td>{accessKey.key}</td>
            </tr>
            <tr>
              <th>Owner id</th>
              <td>{accessKey.ownerId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(accessKey.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(accessKey.updatedAt)}</td>
            </tr>
            <tr>
              <th>Removed at</th>
              <td>{timeTag(accessKey.removedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditAccessKey({ id: accessKey.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(accessKey.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default AccessKey;
