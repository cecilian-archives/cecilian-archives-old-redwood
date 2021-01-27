export const schema = gql`
  type Role {
    id: Int!
    type: RoleType!
    name: String!
    inherentEvent: Event
    inherentEventId: Int
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
    inTags: [Tag]!
  }

  enum RoleType {
    SOCIETY
    COMMITTEE
    PRODUCTION
    PERFORMANCE
  }

  type Query {
    roles: [Role!]!
    searchRoles(needle: String, skip: Int, take: Int): [Role!]!
    role(id: Int!): Role
  }

  input CreateRoleInput {
    type: RoleType!
    name: String!
    inherentEventId: Int
    deletedAt: DateTime
  }

  input UpdateRoleInput {
    type: RoleType
    name: String
    inherentEventId: Int
    deletedAt: DateTime
  }

  type Mutation {
    createRole(input: CreateRoleInput!): Role!
    updateRole(id: Int!, input: UpdateRoleInput!): Role!
    deleteRole(id: Int!): Role!
  }
`;
