export const schema = gql`
  type ArchiveItem {
    id: Int!
    slug: String!
    archiveRef: String!
    type: ArchiveItemType!
    associatedDate: DateTime
    collections: [CollectionItem]!
    notes: String
    author: Cecilian
    authorId: Int
    tags: [ArchiveItemTag]!
    cecilians: [ArchiveItemCecilian]!
    files: [ArchiveItemFile]!
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
    createdBy: User
    createdById: Int
    updatedBy: User
    updatedById: Int
  }

  enum ArchiveItemType {
    MINUTES
    PHOTOS
  }

  type Query {
    archiveItems: [ArchiveItem!]!
    archiveItem(id: Int!): ArchiveItem
  }

  input CreateArchiveItemInput {
    slug: String!
    archiveRef: String!
    type: ArchiveItemType!
    associatedDate: DateTime
    notes: String
    authorId: Int
    deletedAt: DateTime
    createdById: Int
    updatedById: Int
  }

  input UpdateArchiveItemInput {
    slug: String
    archiveRef: String
    type: ArchiveItemType
    associatedDate: DateTime
    notes: String
    authorId: Int
    deletedAt: DateTime
    createdById: Int
    updatedById: Int
  }

  type Mutation {
    createArchiveItem(input: CreateArchiveItemInput!): ArchiveItem!
    updateArchiveItem(id: Int!, input: UpdateArchiveItemInput!): ArchiveItem!
    deleteArchiveItem(id: Int!): ArchiveItem!
  }
`;
