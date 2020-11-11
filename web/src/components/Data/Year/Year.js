import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/YearsCell";

const DELETE_YEAR_MUTATION = gql`
  mutation DeleteYearMutation($id: Int!) {
    deleteYear(id: $id) {
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

const Year = ({ year }) => {
  const { addMessage } = useFlash();
  const [deleteYear] = useMutation(DELETE_YEAR_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataYears());
      addMessage("Year deleted.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete year " + id + "?")) {
      deleteYear({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Year {year.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{year.id}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{year.slug}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{year.name}</td>
            </tr>
            <tr>
              <th>Start date</th>
              <td>{timeTag(year.startDate)}</td>
            </tr>
            <tr>
              <th>End date</th>
              <td>{timeTag(year.endDate)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(year.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(year.updatedAt)}</td>
            </tr>
            <tr>
              <th>Deleted at</th>
              <td>{timeTag(year.deletedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditYear({ id: year.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(year.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default Year;
