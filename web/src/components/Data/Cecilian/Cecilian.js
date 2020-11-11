import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/CeciliansCell";

const DELETE_CECILIAN_MUTATION = gql`
  mutation DeleteCecilianMutation($id: Int!) {
    deleteCecilian(id: $id) {
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

const Cecilian = ({ cecilian }) => {
  const { addMessage } = useFlash();
  const [deleteCecilian] = useMutation(DELETE_CECILIAN_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataCecilians());
      addMessage("Cecilian deleted.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete cecilian " + id + "?")) {
      deleteCecilian({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Cecilian {cecilian.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{cecilian.id}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{cecilian.slug}</td>
            </tr>
            <tr>
              <th>Display name</th>
              <td>{cecilian.displayName}</td>
            </tr>
            <tr>
              <th>Other names</th>
              <td>{cecilian.otherNames}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(cecilian.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(cecilian.updatedAt)}</td>
            </tr>
            <tr>
              <th>Deleted at</th>
              <td>{timeTag(cecilian.deletedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditCecilian({ id: cecilian.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(cecilian.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default Cecilian;
