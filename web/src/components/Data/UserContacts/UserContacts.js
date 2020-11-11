import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/UserContactsCell";

const DELETE_USER_CONTACT_MUTATION = gql`
  mutation DeleteUserContactMutation($id: Int!) {
    deleteUserContact(id: $id) {
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

const UserContactsList = ({ userContacts }) => {
  const { addMessage } = useFlash();
  const [deleteUserContact] = useMutation(DELETE_USER_CONTACT_MUTATION, {
    onCompleted: () => {
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Type</th>
            <th>Custom type</th>
            <th>Value</th>
            <th>Notes</th>
            <th>Visibility</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Deleted at</th>
            <th>User profile id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {userContacts.map((userContact) => (
            <tr key={userContact.id}>
              <td>{truncate(userContact.id)}</td>
              <td>{truncate(userContact.userId)}</td>
              <td>{truncate(userContact.type)}</td>
              <td>{truncate(userContact.customType)}</td>
              <td>{truncate(userContact.value)}</td>
              <td>{truncate(userContact.notes)}</td>
              <td>{truncate(userContact.visibility)}</td>
              <td>{timeTag(userContact.createdAt)}</td>
              <td>{timeTag(userContact.updatedAt)}</td>
              <td>{timeTag(userContact.deletedAt)}</td>
              <td>{truncate(userContact.userProfileId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDataUserContact({ id: userContact.id })}
                    title={"Show userContact " + userContact.id + " detail"}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminDataEditUserContact({ id: userContact.id })}
                    title={"Edit userContact " + userContact.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={"Delete userContact " + userContact.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(userContact.id)}
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

export default UserContactsList;
