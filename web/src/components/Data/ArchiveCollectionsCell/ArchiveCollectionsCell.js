import { Link, routes } from "@redwoodjs/router";

import ArchiveCollections from "src/components/Data/ArchiveCollections";

export const QUERY = gql`
  query ARCHIVE_COLLECTIONS {
    archiveCollections {
      id
      slug
      type
      name
      description
      physicalLocation
      ownerId
      viewPerms
      editPerms
      createdAt
      createdById
      updatedAt
      updatedById
      deletedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No archiveCollections yet. "}
      <Link to={routes.adminDataNewArchiveCollection()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ archiveCollections }) => {
  return <ArchiveCollections archiveCollections={archiveCollections} />;
};
