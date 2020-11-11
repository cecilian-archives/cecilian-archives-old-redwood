import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/ArchiveCollectionsCell";

const DELETE_ARCHIVE_COLLECTION_MUTATION = gql`
  mutation DeleteArchiveCollectionMutation($id: Int!) {
    deleteArchiveCollection(id: $id) {
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

const ArchiveCollectionsList = ({ archiveCollections }) => {
  const { addMessage } = useFlash();
  const [deleteArchiveCollection] = useMutation(
    DELETE_ARCHIVE_COLLECTION_MUTATION,
    {
      onCompleted: () => {
        addMessage("ArchiveCollection deleted.", {
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
      confirm("Are you sure you want to delete archiveCollection " + id + "?")
    ) {
      deleteArchiveCollection({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Slug</th>
            <th>Type</th>
            <th>Name</th>
            <th>Description</th>
            <th>Physical location</th>
            <th>Owner id</th>
            <th>View perms</th>
            <th>Edit perms</th>
            <th>Created at</th>
            <th>Created by id</th>
            <th>Updated at</th>
            <th>Updated by id</th>
            <th>Deleted at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {archiveCollections.map((archiveCollection) => (
            <tr key={archiveCollection.id}>
              <td>{truncate(archiveCollection.id)}</td>
              <td>{truncate(archiveCollection.slug)}</td>
              <td>{truncate(archiveCollection.type)}</td>
              <td>{truncate(archiveCollection.name)}</td>
              <td>{truncate(archiveCollection.description)}</td>
              <td>{truncate(archiveCollection.physicalLocation)}</td>
              <td>{truncate(archiveCollection.ownerId)}</td>
              <td>{truncate(archiveCollection.viewPerms)}</td>
              <td>{truncate(archiveCollection.editPerms)}</td>
              <td>{timeTag(archiveCollection.createdAt)}</td>
              <td>{truncate(archiveCollection.createdById)}</td>
              <td>{timeTag(archiveCollection.updatedAt)}</td>
              <td>{truncate(archiveCollection.updatedById)}</td>
              <td>{timeTag(archiveCollection.deletedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDataArchiveCollection({
                      id: archiveCollection.id,
                    })}
                    title={
                      "Show archiveCollection " +
                      archiveCollection.id +
                      " detail"
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminDataEditArchiveCollection({
                      id: archiveCollection.id,
                    })}
                    title={"Edit archiveCollection " + archiveCollection.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={"Delete archiveCollection " + archiveCollection.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(archiveCollection.id)}
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

export default ArchiveCollectionsList;
