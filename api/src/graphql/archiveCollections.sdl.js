export const schema = gql`
  type ArchiveCollection {
    id: Int!
    slug: String!
    type: ArchiveCollectionType!
    name: String!
    description: String
    physicalLocation: String
    owner: User
    ownerId: Int
    viewPerms: ArchiveCollectionViewPerms!
    editPerms: ArchiveCollectionEditPerms!
    items: [CollectionItem]!
    createdAt: DateTime!
    createdBy: User!
    createdById: Int!
    updatedAt: DateTime!
    updatedBy: User
    updatedById: Int
    deletedAt: DateTime
  }

  enum ArchiveCollectionType {
    PHYSICAL
    SYSTEM
    USER
  }
  enum ArchiveCollectionViewPerms {
    PUBLIC
    PRIVATE
  }
  enum ArchiveCollectionEditPerms {
    OPEN
    CLOSED
  }

  type Query {
    archiveCollections: [ArchiveCollection!]!
    archiveCollection(id: Int!): ArchiveCollection
  }

  input CreateArchiveCollectionInput {
    slug: String!
    type: ArchiveCollectionType!
    name: String!
    description: String
    physicalLocation: String
    ownerId: Int
    viewPerms: ArchiveCollectionViewPerms!
    editPerms: ArchiveCollectionEditPerms!
    createdById: Int!
    updatedById: Int
    deletedAt: DateTime
  }

  input UpdateArchiveCollectionInput {
    slug: String
    type: ArchiveCollectionType
    name: String
    description: String
    physicalLocation: String
    ownerId: Int
    viewPerms: ArchiveCollectionViewPerms
    editPerms: ArchiveCollectionEditPerms
    createdById: Int
    updatedById: Int
    deletedAt: DateTime
  }

  type Mutation {
    createArchiveCollection(
      input: CreateArchiveCollectionInput!
    ): ArchiveCollection!
    updateArchiveCollection(
      id: Int!
      input: UpdateArchiveCollectionInput!
    ): ArchiveCollection!
    deleteArchiveCollection(id: Int!): ArchiveCollection!
  }
`;
