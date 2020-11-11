import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/TagsCell";

const DELETE_TAG_MUTATION = gql`
  mutation DeleteTagMutation($id: Int!) {
    deleteTag(id: $id) {
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

const TagsList = ({ tags }) => {
  const { addMessage } = useFlash();
  const [deleteTag] = useMutation(DELETE_TAG_MUTATION, {
    onCompleted: () => {
      addMessage("Tag deleted.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete tag " + id + "?")) {
      deleteTag({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>Role id</th>
            <th>Event id</th>
            <th>Year id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Deleted at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((tag) => (
            <tr key={tag.id}>
              <td>{truncate(tag.id)}</td>
              <td>{truncate(tag.type)}</td>
              <td>{truncate(tag.roleId)}</td>
              <td>{truncate(tag.eventId)}</td>
              <td>{truncate(tag.yearId)}</td>
              <td>{timeTag(tag.createdAt)}</td>
              <td>{timeTag(tag.updatedAt)}</td>
              <td>{timeTag(tag.deletedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDataTag({ id: tag.id })}
                    title={"Show tag " + tag.id + " detail"}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminDataEditTag({ id: tag.id })}
                    title={"Edit tag " + tag.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={"Delete tag " + tag.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tag.id)}
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

export default TagsList;
