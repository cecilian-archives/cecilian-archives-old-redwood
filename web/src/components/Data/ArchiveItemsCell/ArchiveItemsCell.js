import { Link, routes } from "@redwoodjs/router";

import ArchiveItems from "src/components/Data/ArchiveItems";

export const QUERY = gql`
  query ARCHIVE_ITEMS {
    archiveItems {
      id
      slug
      archiveRef
      type
      associatedDate
      notes
      authorId
      createdAt
      updatedAt
      deletedAt
      createdById
      updatedById
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No archiveItems yet. "}
      <Link to={routes.adminDataNewArchiveItem()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ archiveItems }) => {
  return <ArchiveItems archiveItems={archiveItems} />;
};
