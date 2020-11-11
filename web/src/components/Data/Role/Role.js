import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/RolesCell";

const DELETE_ROLE_MUTATION = gql`
  mutation DeleteRoleMutation($id: Int!) {
    deleteRole(id: $id) {
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

const Role = ({ role }) => {
  const { addMessage } = useFlash();
  const [deleteRole] = useMutation(DELETE_ROLE_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataRoles());
      addMessage("Role deleted.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete role " + id + "?")) {
      deleteRole({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Role {role.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{role.id}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{role.type}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{role.name}</td>
            </tr>
            <tr>
              <th>Inherent event id</th>
              <td>{role.inherentEventId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(role.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(role.updatedAt)}</td>
            </tr>
            <tr>
              <th>Deleted at</th>
              <td>{timeTag(role.deletedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditRole({ id: role.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(role.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default Role;
