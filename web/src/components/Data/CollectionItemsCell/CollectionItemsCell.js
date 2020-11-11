import { Link, routes } from "@redwoodjs/router";

import CollectionItems from "src/components/Data/CollectionItems";

export const QUERY = gql`
  query COLLECTION_ITEMS {
    collectionItems {
      id
      itemId
      collectionId
      itemIndex
      addedById
      addedAt
      updatedAt
      removedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No collectionItems yet. "}
      <Link to={routes.adminDataNewCollectionItem()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ collectionItems }) => {
  return <CollectionItems collectionItems={collectionItems} />;
};
