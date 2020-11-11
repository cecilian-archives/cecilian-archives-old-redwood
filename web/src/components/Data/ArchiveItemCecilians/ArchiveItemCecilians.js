import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/ArchiveItemCeciliansCell";

const DELETE_ARCHIVE_ITEM_CECILIAN_MUTATION = gql`
  mutation DeleteArchiveItemCecilianMutation($id: Int!) {
    deleteArchiveItemCecilian(id: $id) {
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

const ArchiveItemCeciliansList = ({ archiveItemCecilians }) => {
  const { addMessage } = useFlash();
  const [deleteArchiveItemCecilian] = useMutation(
    DELETE_ARCHIVE_ITEM_CECILIAN_MUTATION,
    {
      onCompleted: () => {
        addMessage("ArchiveItemCecilian deleted.", {
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
      confirm("Are you sure you want to delete archiveItemCecilian " + id + "?")
    ) {
      deleteArchiveItemCecilian({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Cecilian id</th>
            <th>Item id</th>
            <th>Added at</th>
            <th>Removed at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {archiveItemCecilians.map((archiveItemCecilian) => (
            <tr key={archiveItemCecilian.id}>
              <td>{truncate(archiveItemCecilian.id)}</td>
              <td>{truncate(archiveItemCecilian.cecilianId)}</td>
              <td>{truncate(archiveItemCecilian.itemId)}</td>
              <td>{timeTag(archiveItemCecilian.addedAt)}</td>
              <td>{timeTag(archiveItemCecilian.removedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDataArchiveItemCecilian({
                      id: archiveItemCecilian.id,
                    })}
                    title={
                      "Show archiveItemCecilian " +
                      archiveItemCecilian.id +
                      " detail"
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminDataEditArchiveItemCecilian({
                      id: archiveItemCecilian.id,
                    })}
                    title={"Edit archiveItemCecilian " + archiveItemCecilian.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={
                      "Delete archiveItemCecilian " + archiveItemCecilian.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(archiveItemCecilian.id)}
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

export default ArchiveItemCeciliansList;
