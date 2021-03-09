export const schema = gql`
  type ArchiveFile {
    id: Int!
    slug: String!
    kind: ArchiveFileKind!
    name: String!
    notes: String
    url: String!
    items: [ArchiveItemFile]!
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
    deletedBy: User
    deletedById: Int
  }

  enum ArchiveFileKind {
    # Descriptions are for ease of display in dropdown menus etc.
    "Transcription"
    TRANSCRIPTION
    "Scan"
    SCAN
    "Previously Digitised"
    PREVIOUSLY_DIGITISED
    "Created Digitally"
    CREATED_DIGITALLY
  }

  type Query {
    archiveFiles: [ArchiveFile!]!
    archiveFile(id: Int!): ArchiveFile
  }

  input CreateArchiveFileInput {
    slug: String!
    kind: ArchiveFileKind!
    name: String!
    notes: String
    url: String!
    deletedAt: DateTime
    deletedById: Int
  }

  input UpdateArchiveFileInput {
    slug: String
    kind: ArchiveFileKind
    name: String
    notes: String
    url: String
    deletedAt: DateTime
    deletedById: Int
  }

  type Mutation {
    createArchiveFile(input: CreateArchiveFileInput!): ArchiveFile!
    updateArchiveFile(id: Int!, input: UpdateArchiveFileInput!): ArchiveFile!
    deleteArchiveFile(id: Int!): ArchiveFile!
  }
`;
