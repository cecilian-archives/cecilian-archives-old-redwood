import { Link, routes } from "@redwoodjs/router";

import ArchiveItemCecilians from "src/components/Data/ArchiveItemCecilians";

export const QUERY = gql`
  query ARCHIVE_ITEM_CECILIANS {
    archiveItemCecilians {
      id
      cecilianId
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
      {"No archiveItemCecilians yet. "}
      <Link to={routes.adminDataNewArchiveItemCecilian()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ archiveItemCecilians }) => {
  return <ArchiveItemCecilians archiveItemCecilians={archiveItemCecilians} />;
};
