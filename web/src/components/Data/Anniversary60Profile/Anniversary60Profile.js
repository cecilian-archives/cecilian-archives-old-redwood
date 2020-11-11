import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/Anniversary60ProfilesCell";

const DELETE_ANNIVERSARY60_PROFILE_MUTATION = gql`
  mutation DeleteAnniversary60ProfileMutation($id: Int!) {
    deleteAnniversary60Profile(id: $id) {
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

const Anniversary60Profile = ({ anniversary60Profile }) => {
  const { addMessage } = useFlash();
  const [deleteAnniversary60Profile] = useMutation(
    DELETE_ANNIVERSARY60_PROFILE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataAnniversary60Profiles());
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Anniversary60Profile {anniversary60Profile.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{anniversary60Profile.id}</td>
            </tr>
            <tr>
              <th>User profile id</th>
              <td>{anniversary60Profile.userProfileId}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{anniversary60Profile.title}</td>
            </tr>
            <tr>
              <th>Firstname</th>
              <td>{anniversary60Profile.firstname}</td>
            </tr>
            <tr>
              <th>Surname</th>
              <td>{anniversary60Profile.surname}</td>
            </tr>
            <tr>
              <th>Prev names</th>
              <td>{anniversary60Profile.prevNames}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{anniversary60Profile.address}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{anniversary60Profile.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{anniversary60Profile.phone}</td>
            </tr>
            <tr>
              <th>Other info</th>
              <td>{anniversary60Profile.otherInfo}</td>
            </tr>
            <tr>
              <th>Would like to</th>
              <td>{anniversary60Profile.wouldLikeTo}</td>
            </tr>
            <tr>
              <th>Dietary</th>
              <td>{anniversary60Profile.dietary}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(anniversary60Profile.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditAnniversary60Profile({
            id: anniversary60Profile.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(anniversary60Profile.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default Anniversary60Profile;
