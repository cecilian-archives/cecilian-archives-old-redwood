import { Link, routes } from "@redwoodjs/router";

import ArchiveItemTags from "src/components/Data/ArchiveItemTags";

export const QUERY = gql`
  query ARCHIVE_ITEM_TAGS {
    archiveItemTags {
      id
      itemId
      tagId
      addedAt
      removedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No archiveItemTags yet. "}
      <Link to={routes.adminDataNewArchiveItemTag()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ archiveItemTags }) => {
  return <ArchiveItemTags archiveItemTags={archiveItemTags} />;
};
