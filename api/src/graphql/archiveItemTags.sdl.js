export const schema = gql`
  type ArchiveItemTag {
    id: Int!
    item: ArchiveItem!
    itemId: Int!
    tag: Tag!
    tagId: Int!
    addedAt: DateTime!
    removedAt: DateTime
  }

  type Query {
    archiveItemTags: [ArchiveItemTag!]!
    archiveItemTag(id: Int!): ArchiveItemTag
  }

  input CreateArchiveItemTagInput {
    itemId: Int!
    tagId: Int!
    addedAt: DateTime!
    removedAt: DateTime
  }

  input UpdateArchiveItemTagInput {
    itemId: Int
    tagId: Int
    addedAt: DateTime
    removedAt: DateTime
  }

  type Mutation {
    createArchiveItemTag(input: CreateArchiveItemTagInput!): ArchiveItemTag!
    updateArchiveItemTag(
      id: Int!
      input: UpdateArchiveItemTagInput!
    ): ArchiveItemTag!
    deleteArchiveItemTag(id: Int!): ArchiveItemTag!
  }
`;
