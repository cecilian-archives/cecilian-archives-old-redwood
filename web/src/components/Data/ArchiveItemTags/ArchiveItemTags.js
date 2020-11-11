import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/ArchiveItemTagsCell";

const DELETE_ARCHIVE_ITEM_TAG_MUTATION = gql`
  mutation DeleteArchiveItemTagMutation($id: Int!) {
    deleteArchiveItemTag(id: $id) {
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

const ArchiveItemTagsList = ({ archiveItemTags }) => {
  const { addMessage } = useFlash();
  const [deleteArchiveItemTag] = useMutation(DELETE_ARCHIVE_ITEM_TAG_MUTATION, {
    onCompleted: () => {
      addMessage("ArchiveItemTag deleted.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete archiveItemTag " + id + "?")) {
      deleteArchiveItemTag({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Item id</th>
            <th>Tag id</th>
            <th>Added at</th>
            <th>Removed at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {archiveItemTags.map((archiveItemTag) => (
            <tr key={archiveItemTag.id}>
              <td>{truncate(archiveItemTag.id)}</td>
              <td>{truncate(archiveItemTag.itemId)}</td>
              <td>{truncate(archiveItemTag.tagId)}</td>
              <td>{timeTag(archiveItemTag.addedAt)}</td>
              <td>{timeTag(archiveItemTag.removedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDataArchiveItemTag({
                      id: archiveItemTag.id,
                    })}
                    title={
                      "Show archiveItemTag " + archiveItemTag.id + " detail"
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminDataEditArchiveItemTag({
                      id: archiveItemTag.id,
                    })}
                    title={"Edit archiveItemTag " + archiveItemTag.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={"Delete archiveItemTag " + archiveItemTag.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(archiveItemTag.id)}
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

export default ArchiveItemTagsList;
