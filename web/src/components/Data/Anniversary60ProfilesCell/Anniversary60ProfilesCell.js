import { Link, routes } from "@redwoodjs/router";

import Anniversary60Profiles from "src/components/Data/Anniversary60Profiles";

export const QUERY = gql`
  query ANNIVERSARY60_PROFILES {
    anniversary60Profiles {
      id
      userProfileId
      title
      firstname
      surname
      prevNames
      address
      email
      phone
      otherInfo
      wouldLikeTo
      dietary
      updatedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No anniversary60Profiles yet. "}
      <Link to={routes.adminDataNewAnniversary60Profile()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ anniversary60Profiles }) => {
  return (
    <Anniversary60Profiles anniversary60Profiles={anniversary60Profiles} />
  );
};
