import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/YearsCell";

const DELETE_YEAR_MUTATION = gql`
  mutation DeleteYearMutation($id: Int!) {
    deleteYear(id: $id) {
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

const YearsList = ({ years }) => {
  const { addMessage } = useFlash();
  const [deleteYear] = useMutation(DELETE_YEAR_MUTATION, {
    onCompleted: () => {
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Slug</th>
            <th>Name</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Deleted at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {years.map((year) => (
            <tr key={year.id}>
              <td>{truncate(year.id)}</td>
              <td>{truncate(year.slug)}</td>
              <td>{truncate(year.name)}</td>
              <td>{timeTag(year.startDate)}</td>
              <td>{timeTag(year.endDate)}</td>
              <td>{timeTag(year.createdAt)}</td>
              <td>{timeTag(year.updatedAt)}</td>
              <td>{timeTag(year.deletedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDataYear({ id: year.id })}
                    title={"Show year " + year.id + " detail"}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminDataEditYear({ id: year.id })}
                    title={"Edit year " + year.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={"Delete year " + year.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(year.id)}
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

export default YearsList;
