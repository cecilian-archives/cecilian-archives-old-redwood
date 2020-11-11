import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/CeciliansCell";

const DELETE_CECILIAN_MUTATION = gql`
  mutation DeleteCecilianMutation($id: Int!) {
    deleteCecilian(id: $id) {
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

const CeciliansList = ({ cecilians }) => {
  const { addMessage } = useFlash();
  const [deleteCecilian] = useMutation(DELETE_CECILIAN_MUTATION, {
    onCompleted: () => {
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Slug</th>
            <th>Display name</th>
            <th>Other names</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Deleted at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {cecilians.map((cecilian) => (
            <tr key={cecilian.id}>
              <td>{truncate(cecilian.id)}</td>
              <td>{truncate(cecilian.slug)}</td>
              <td>{truncate(cecilian.displayName)}</td>
              <td>{truncate(cecilian.otherNames)}</td>
              <td>{timeTag(cecilian.createdAt)}</td>
              <td>{timeTag(cecilian.updatedAt)}</td>
              <td>{timeTag(cecilian.deletedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDataCecilian({ id: cecilian.id })}
                    title={"Show cecilian " + cecilian.id + " detail"}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminDataEditCecilian({ id: cecilian.id })}
                    title={"Edit cecilian " + cecilian.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={"Delete cecilian " + cecilian.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(cecilian.id)}
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

export default CeciliansList;
