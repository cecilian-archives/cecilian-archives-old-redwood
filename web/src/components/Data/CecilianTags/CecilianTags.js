import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/CecilianTagsCell";

const DELETE_CECILIAN_TAG_MUTATION = gql`
  mutation DeleteCecilianTagMutation($id: Int!) {
    deleteCecilianTag(id: $id) {
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

const CecilianTagsList = ({ cecilianTags }) => {
  const { addMessage } = useFlash();
  const [deleteCecilianTag] = useMutation(DELETE_CECILIAN_TAG_MUTATION, {
    onCompleted: () => {
      addMessage("CecilianTag deleted.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete cecilianTag " + id + "?")) {
      deleteCecilianTag({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Cecilian id</th>
            <th>Tag id</th>
            <th>Added at</th>
            <th>Removed at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {cecilianTags.map((cecilianTag) => (
            <tr key={cecilianTag.id}>
              <td>{truncate(cecilianTag.id)}</td>
              <td>{truncate(cecilianTag.cecilianId)}</td>
              <td>{truncate(cecilianTag.tagId)}</td>
              <td>{timeTag(cecilianTag.addedAt)}</td>
              <td>{timeTag(cecilianTag.removedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDataCecilianTag({ id: cecilianTag.id })}
                    title={"Show cecilianTag " + cecilianTag.id + " detail"}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminDataEditCecilianTag({ id: cecilianTag.id })}
                    title={"Edit cecilianTag " + cecilianTag.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={"Delete cecilianTag " + cecilianTag.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(cecilianTag.id)}
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

export default CecilianTagsList;
