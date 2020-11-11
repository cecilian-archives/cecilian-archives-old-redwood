export const schema = gql`
  type CollectionItem {
    id: Int!
    item: ArchiveItem!
    itemId: Int!
    collection: ArchiveCollection!
    collectionId: Int!
    itemIndex: String
    addedBy: User
    addedById: Int
    addedAt: DateTime!
    updatedAt: DateTime!
    removedAt: DateTime
  }

  type Query {
    collectionItems: [CollectionItem!]!
    collectionItem(id: Int!): CollectionItem
  }

  input CreateCollectionItemInput {
    itemId: Int!
    collectionId: Int!
    itemIndex: String
    addedById: Int
    addedAt: DateTime!
    removedAt: DateTime
  }

  input UpdateCollectionItemInput {
    itemId: Int
    collectionId: Int
    itemIndex: String
    addedById: Int
    addedAt: DateTime
    removedAt: DateTime
  }

  type Mutation {
    createCollectionItem(input: CreateCollectionItemInput!): CollectionItem!
    updateCollectionItem(
      id: Int!
      input: UpdateCollectionItemInput!
    ): CollectionItem!
    deleteCollectionItem(id: Int!): CollectionItem!
  }
`;
