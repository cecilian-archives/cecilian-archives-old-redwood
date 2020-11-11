import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/UserContactsCell";

const DELETE_USER_CONTACT_MUTATION = gql`
  mutation DeleteUserContactMutation($id: Int!) {
    deleteUserContact(id: $id) {
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

const UserContact = ({ userContact }) => {
  const { addMessage } = useFlash();
  const [deleteUserContact] = useMutation(DELETE_USER_CONTACT_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataUserContacts());
      addMessage("UserContact deleted.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete userContact " + id + "?")) {
      deleteUserContact({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            UserContact {userContact.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{userContact.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{userContact.userId}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{userContact.type}</td>
            </tr>
            <tr>
              <th>Custom type</th>
              <td>{userContact.customType}</td>
            </tr>
            <tr>
              <th>Value</th>
              <td>{userContact.value}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{userContact.notes}</td>
            </tr>
            <tr>
              <th>Visibility</th>
              <td>{userContact.visibility}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(userContact.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(userContact.updatedAt)}</td>
            </tr>
            <tr>
              <th>Deleted at</th>
              <td>{timeTag(userContact.deletedAt)}</td>
            </tr>
            <tr>
              <th>User profile id</th>
              <td>{userContact.userProfileId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditUserContact({ id: userContact.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(userContact.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default UserContact;
