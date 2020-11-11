export const schema = gql`
  type ArchiveItemCecilian {
    id: Int!
    cecilian: Cecilian
    cecilianId: Int
    item: ArchiveItem
    itemId: Int
    addedAt: DateTime!
    removedAt: DateTime
  }

  type Query {
    archiveItemCecilians: [ArchiveItemCecilian!]!
    archiveItemCecilian(id: Int!): ArchiveItemCecilian
  }

  input CreateArchiveItemCecilianInput {
    cecilianId: Int
    itemId: Int
    addedAt: DateTime!
    removedAt: DateTime
  }

  input UpdateArchiveItemCecilianInput {
    cecilianId: Int
    itemId: Int
    addedAt: DateTime
    removedAt: DateTime
  }

  type Mutation {
    createArchiveItemCecilian(
      input: CreateArchiveItemCecilianInput!
    ): ArchiveItemCecilian!
    updateArchiveItemCecilian(
      id: Int!
      input: UpdateArchiveItemCecilianInput!
    ): ArchiveItemCecilian!
    deleteArchiveItemCecilian(id: Int!): ArchiveItemCecilian!
  }
`;
