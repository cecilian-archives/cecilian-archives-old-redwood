import Cecilian from "src/components/Data/Cecilian";

export const QUERY = gql`
  query FIND_CECILIAN_BY_ID($id: Int!) {
    cecilian: cecilian(id: $id) {
      id
      slug
      displayName
      otherNames
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Cecilian not found</div>;

export const Success = ({ cecilian }) => {
  return <Cecilian cecilian={cecilian} />;
};
