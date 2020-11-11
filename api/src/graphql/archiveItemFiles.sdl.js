export const schema = gql`
  type ArchiveItemFile {
    id: Int!
    file: ArchiveFile
    fileId: Int
    item: ArchiveItem
    itemId: Int
    addedAt: DateTime!
    removedAt: DateTime
  }

  type Query {
    archiveItemFiles: [ArchiveItemFile!]!
    archiveItemFile(id: Int!): ArchiveItemFile
  }

  input CreateArchiveItemFileInput {
    fileId: Int
    itemId: Int
    addedAt: DateTime!
    removedAt: DateTime
  }

  input UpdateArchiveItemFileInput {
    fileId: Int
    itemId: Int
    addedAt: DateTime
    removedAt: DateTime
  }

  type Mutation {
    createArchiveItemFile(input: CreateArchiveItemFileInput!): ArchiveItemFile!
    updateArchiveItemFile(
      id: Int!
      input: UpdateArchiveItemFileInput!
    ): ArchiveItemFile!
    deleteArchiveItemFile(id: Int!): ArchiveItemFile!
  }
`;
