import Year from "src/components/Data/Year";

export const QUERY = gql`
  query FIND_YEAR_BY_ID($id: Int!) {
    year: year(id: $id) {
      id
      slug
      name
      startDate
      endDate
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Year not found</div>;

export const Success = ({ year }) => {
  return <Year year={year} />;
};
