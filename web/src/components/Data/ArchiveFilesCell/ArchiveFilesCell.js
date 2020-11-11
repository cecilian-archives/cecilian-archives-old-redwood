import { Link, routes } from "@redwoodjs/router";

import ArchiveFiles from "src/components/Data/ArchiveFiles";

export const QUERY = gql`
  query ARCHIVE_FILES {
    archiveFiles {
      id
      slug
      kind
      name
      notes
      url
      createdAt
      updatedAt
      deletedAt
      deletedById
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No archiveFiles yet. "}
      <Link to={routes.adminDataNewArchiveFile()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ archiveFiles }) => {
  return <ArchiveFiles archiveFiles={archiveFiles} />;
};
