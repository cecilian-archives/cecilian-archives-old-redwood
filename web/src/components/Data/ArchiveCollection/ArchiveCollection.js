import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/ArchiveCollectionsCell";

const DELETE_ARCHIVE_COLLECTION_MUTATION = gql`
  mutation DeleteArchiveCollectionMutation($id: Int!) {
    deleteArchiveCollection(id: $id) {
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

const ArchiveCollection = ({ archiveCollection }) => {
  const { addMessage } = useFlash();
  const [deleteArchiveCollection] = useMutation(
    DELETE_ARCHIVE_COLLECTION_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataArchiveCollections());
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
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ArchiveCollection {archiveCollection.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{archiveCollection.id}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{archiveCollection.slug}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{archiveCollection.type}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{archiveCollection.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{archiveCollection.description}</td>
            </tr>
            <tr>
              <th>Physical location</th>
              <td>{archiveCollection.physicalLocation}</td>
            </tr>
            <tr>
              <th>Owner id</th>
              <td>{archiveCollection.ownerId}</td>
            </tr>
            <tr>
              <th>View perms</th>
              <td>{archiveCollection.viewPerms}</td>
            </tr>
            <tr>
              <th>Edit perms</th>
              <td>{archiveCollection.editPerms}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(archiveCollection.createdAt)}</td>
            </tr>
            <tr>
              <th>Created by id</th>
              <td>{archiveCollection.createdById}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(archiveCollection.updatedAt)}</td>
            </tr>
            <tr>
              <th>Updated by id</th>
              <td>{archiveCollection.updatedById}</td>
            </tr>
            <tr>
              <th>Deleted at</th>
              <td>{timeTag(archiveCollection.deletedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditArchiveCollection({
            id: archiveCollection.id,
          })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(archiveCollection.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default ArchiveCollection;
