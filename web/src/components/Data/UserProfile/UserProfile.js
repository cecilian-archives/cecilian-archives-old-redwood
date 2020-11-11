import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/UserProfilesCell";

const DELETE_USER_PROFILE_MUTATION = gql`
  mutation DeleteUserProfileMutation($id: Int!) {
    deleteUserProfile(id: $id) {
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

const UserProfile = ({ userProfile }) => {
  const { addMessage } = useFlash();
  const [deleteUserProfile] = useMutation(DELETE_USER_PROFILE_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataUserProfiles());
      addMessage("UserProfile deleted.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete userProfile " + id + "?")) {
      deleteUserProfile({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            UserProfile {userProfile.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{userProfile.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{userProfile.userId}</td>
            </tr>
            <tr>
              <th>Cecilian id</th>
              <td>{userProfile.cecilianId}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{userProfile.title}</td>
            </tr>
            <tr>
              <th>First names</th>
              <td>{userProfile.firstNames}</td>
            </tr>
            <tr>
              <th>Last names</th>
              <td>{userProfile.lastNames}</td>
            </tr>
            <tr>
              <th>Other names</th>
              <td>{userProfile.otherNames}</td>
            </tr>
            <tr>
              <th>Visibility</th>
              <td>{userProfile.visibility}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(userProfile.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(userProfile.updatedAt)}</td>
            </tr>
            <tr>
              <th>Deleted at</th>
              <td>{timeTag(userProfile.deletedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditUserProfile({ id: userProfile.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(userProfile.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default UserProfile;
