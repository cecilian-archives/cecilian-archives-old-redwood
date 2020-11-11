import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/Anniversary60ProfilesCell";

const DELETE_ANNIVERSARY60_PROFILE_MUTATION = gql`
  mutation DeleteAnniversary60ProfileMutation($id: Int!) {
    deleteAnniversary60Profile(id: $id) {
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

const Anniversary60ProfilesList = ({ anniversary60Profiles }) => {
  const { addMessage } = useFlash();
  const [deleteAnniversary60Profile] = useMutation(
    DELETE_ANNIVERSARY60_PROFILE_MUTATION,
    {
      onCompleted: () => {
        addMessage("Anniversary60Profile deleted.", {
          classes: "rw-flash-success",
        });
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  );

  const onDeleteClick = (id) => {
    if (
      confirm(
        "Are you sure you want to delete anniversary60Profile " + id + "?"
      )
    ) {
      deleteAnniversary60Profile({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User profile id</th>
            <th>Title</th>
            <th>Firstname</th>
            <th>Surname</th>
            <th>Prev names</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Other info</th>
            <th>Would like to</th>
            <th>Dietary</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {anniversary60Profiles.map((anniversary60Profile) => (
            <tr key={anniversary60Profile.id}>
              <td>{truncate(anniversary60Profile.id)}</td>
              <td>{truncate(anniversary60Profile.userProfileId)}</td>
              <td>{truncate(anniversary60Profile.title)}</td>
              <td>{truncate(anniversary60Profile.firstname)}</td>
              <td>{truncate(anniversary60Profile.surname)}</td>
              <td>{truncate(anniversary60Profile.prevNames)}</td>
              <td>{truncate(anniversary60Profile.address)}</td>
              <td>{truncate(anniversary60Profile.email)}</td>
              <td>{truncate(anniversary60Profile.phone)}</td>
              <td>{truncate(anniversary60Profile.otherInfo)}</td>
              <td>{truncate(anniversary60Profile.wouldLikeTo)}</td>
              <td>{truncate(anniversary60Profile.dietary)}</td>
              <td>{timeTag(anniversary60Profile.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDataAnniversary60Profile({
                      id: anniversary60Profile.id,
                    })}
                    title={
                      "Show anniversary60Profile " +
                      anniversary60Profile.id +
                      " detail"
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminDataEditAnniversary60Profile({
                      id: anniversary60Profile.id,
                    })}
                    title={
                      "Edit anniversary60Profile " + anniversary60Profile.id
                    }
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={
                      "Delete anniversary60Profile " + anniversary60Profile.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(anniversary60Profile.id)}
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

export default Anniversary60ProfilesList;
