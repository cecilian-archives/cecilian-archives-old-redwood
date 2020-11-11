import { Link, routes } from "@redwoodjs/router";

import ArchiveItemFiles from "src/components/Data/ArchiveItemFiles";

export const QUERY = gql`
  query ARCHIVE_ITEM_FILES {
    archiveItemFiles {
      id
      fileId
      itemId
      addedAt
      removedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No archiveItemFiles yet. "}
      <Link to={routes.adminDataNewArchiveItemFile()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ archiveItemFiles }) => {
  return <ArchiveItemFiles archiveItemFiles={archiveItemFiles} />;
};
