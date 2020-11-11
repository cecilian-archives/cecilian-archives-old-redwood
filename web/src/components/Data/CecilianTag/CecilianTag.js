import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/CecilianTagsCell";

const DELETE_CECILIAN_TAG_MUTATION = gql`
  mutation DeleteCecilianTagMutation($id: Int!) {
    deleteCecilianTag(id: $id) {
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

const CecilianTag = ({ cecilianTag }) => {
  const { addMessage } = useFlash();
  const [deleteCecilianTag] = useMutation(DELETE_CECILIAN_TAG_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataCecilianTags());
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CecilianTag {cecilianTag.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{cecilianTag.id}</td>
            </tr>
            <tr>
              <th>Cecilian id</th>
              <td>{cecilianTag.cecilianId}</td>
            </tr>
            <tr>
              <th>Tag id</th>
              <td>{cecilianTag.tagId}</td>
            </tr>
            <tr>
              <th>Added at</th>
              <td>{timeTag(cecilianTag.addedAt)}</td>
            </tr>
            <tr>
              <th>Removed at</th>
              <td>{timeTag(cecilianTag.removedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditCecilianTag({ id: cecilianTag.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(cecilianTag.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default CecilianTag;
