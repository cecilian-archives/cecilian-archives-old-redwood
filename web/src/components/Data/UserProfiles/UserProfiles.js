import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/UserProfilesCell";

const DELETE_USER_PROFILE_MUTATION = gql`
  mutation DeleteUserProfileMutation($id: Int!) {
    deleteUserProfile(id: $id) {
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

const UserProfilesList = ({ userProfiles }) => {
  const { addMessage } = useFlash();
  const [deleteUserProfile] = useMutation(DELETE_USER_PROFILE_MUTATION, {
    onCompleted: () => {
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Cecilian id</th>
            <th>Title</th>
            <th>First names</th>
            <th>Last names</th>
            <th>Other names</th>
            <th>Visibility</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Deleted at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {userProfiles.map((userProfile) => (
            <tr key={userProfile.id}>
              <td>{truncate(userProfile.id)}</td>
              <td>{truncate(userProfile.userId)}</td>
              <td>{truncate(userProfile.cecilianId)}</td>
              <td>{truncate(userProfile.title)}</td>
              <td>{truncate(userProfile.firstNames)}</td>
              <td>{truncate(userProfile.lastNames)}</td>
              <td>{truncate(userProfile.otherNames)}</td>
              <td>{truncate(userProfile.visibility)}</td>
              <td>{timeTag(userProfile.createdAt)}</td>
              <td>{timeTag(userProfile.updatedAt)}</td>
              <td>{timeTag(userProfile.deletedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDataUserProfile({ id: userProfile.id })}
                    title={"Show userProfile " + userProfile.id + " detail"}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminDataEditUserProfile({ id: userProfile.id })}
                    title={"Edit userProfile " + userProfile.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={"Delete userProfile " + userProfile.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(userProfile.id)}
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

export default UserProfilesList;
