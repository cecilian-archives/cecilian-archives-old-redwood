import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/TagsCell";

const DELETE_TAG_MUTATION = gql`
  mutation DeleteTagMutation($id: Int!) {
    deleteTag(id: $id) {
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

const Tag = ({ tag }) => {
  const { addMessage } = useFlash();
  const [deleteTag] = useMutation(DELETE_TAG_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataTags());
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Tag {tag.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{tag.id}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{tag.type}</td>
            </tr>
            <tr>
              <th>Role id</th>
              <td>{tag.roleId}</td>
            </tr>
            <tr>
              <th>Event id</th>
              <td>{tag.eventId}</td>
            </tr>
            <tr>
              <th>Year id</th>
              <td>{tag.yearId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(tag.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(tag.updatedAt)}</td>
            </tr>
            <tr>
              <th>Deleted at</th>
              <td>{timeTag(tag.deletedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditTag({ id: tag.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tag.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default Tag;
