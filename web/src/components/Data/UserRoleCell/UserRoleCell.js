import UserRole from "src/components/Data/UserRole";

export const QUERY = gql`
  query FIND_USER_ROLE_BY_ID($id: Int!) {
    userRole: userRole(id: $id) {
      id
      roleName
      accessLevel
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>UserRole not found</div>;

export const Success = ({ userRole }) => {
  return <UserRole userRole={userRole} />;
};
