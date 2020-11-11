export const schema = gql`
  type User {
    id: Int!
    slug: String!
    profile: UserProfile
    accessKey: AccessKey
    verifiedByKey: AccessKey!
    verifiedByKeyId: Int!
    roles: [UserRole]!
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
    archiveItemsCreated: [ArchiveItem]!
    collectionsOwned: [ArchiveCollection]!
    collectionsCreated: [ArchiveCollection]!
    UserContact: [UserContact]!
    ArchiveItem: [ArchiveItem]!
    ArchiveFile: [ArchiveFile]!
    ArchiveCollection: [ArchiveCollection]!
    CollectionItem: [CollectionItem]!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
  }

  input CreateUserInput {
    slug: String!
    verifiedByKeyId: Int!
    deletedAt: DateTime
  }

  input UpdateUserInput {
    slug: String
    verifiedByKeyId: Int
    deletedAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`;
