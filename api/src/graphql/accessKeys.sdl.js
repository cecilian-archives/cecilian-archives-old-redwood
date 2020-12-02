export const schema = gql`
  type AccessKey {
    id: Int!
    key: String!
    owner: User
    ownerId: Int
    usedBy: [User]!
    createdAt: DateTime!
    updatedAt: DateTime!
    removedAt: DateTime
  }

  type Query {
    accessKeys: [AccessKey!]!
    accessKey(id: Int!): AccessKey
  }

  input CreateAccessKeyInput {
    key: String!
    ownerId: Int
  }

  input UpdateAccessKeyInput {
    key: String
    ownerId: Int
  }

  type Mutation {
    createAccessKey(input: CreateAccessKeyInput!): AccessKey!
    updateAccessKey(id: Int!, input: UpdateAccessKeyInput!): AccessKey!
    deleteAccessKey(id: Int!): AccessKey!
  }
`;
