import Event from "src/components/Data/Event";

export const QUERY = gql`
  query FIND_EVENT_BY_ID($id: Int!) {
    event: event(id: $id) {
      id
      type
      name
      inherentYearId
      startDate
      endDate
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Event not found</div>;

export const Success = ({ event }) => {
  return <Event event={event} />;
};
