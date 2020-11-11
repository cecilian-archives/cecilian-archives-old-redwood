import Role from "src/components/Data/Role";

export const QUERY = gql`
  query FIND_ROLE_BY_ID($id: Int!) {
    role: role(id: $id) {
      id
      type
      name
      inherentEventId
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Role not found</div>;

export const Success = ({ role }) => {
  return <Role role={role} />;
};
