export const schema = gql`
  type UserRole {
    id: Int!
    roleName: String!
    accessLevel: Int!
    users: [User]!
  }

  type Query {
    userRoles: [UserRole!]!
    userRole(id: Int!): UserRole
  }

  input CreateUserRoleInput {
    roleName: String!
    accessLevel: Int!
  }

  input UpdateUserRoleInput {
    roleName: String
    accessLevel: Int
  }

  type Mutation {
    createUserRole(input: CreateUserRoleInput!): UserRole!
    updateUserRole(id: Int!, input: UpdateUserRoleInput!): UserRole!
    deleteUserRole(id: Int!): UserRole!
  }
`;
