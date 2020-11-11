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
    PERFORMANCE
    PRODUCTION
    COMMITTEE
    SOCIETY
  }

  type Query {
    roles: [Role!]!
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
