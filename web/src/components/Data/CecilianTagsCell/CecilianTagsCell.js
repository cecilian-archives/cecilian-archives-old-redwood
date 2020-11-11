import { Link, routes } from "@redwoodjs/router";

import CecilianTags from "src/components/Data/CecilianTags";

export const QUERY = gql`
  query CECILIAN_TAGS {
    cecilianTags {
      id
      cecilianId
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
      {"No cecilianTags yet. "}
      <Link to={routes.adminDataNewCecilianTag()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ cecilianTags }) => {
  return <CecilianTags cecilianTags={cecilianTags} />;
};
