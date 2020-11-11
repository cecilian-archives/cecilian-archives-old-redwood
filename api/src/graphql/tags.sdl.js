export const schema = gql`
  type Tag {
    id: Int!
    type: TagType!
    role: Role
    roleId: Int
    event: Event
    eventId: Int
    year: Year
    yearId: Int
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
    cecilians: [CecilianTag]!
    archiveItems: [ArchiveItemTag]!
  }

  enum TagType {
    YEAR
    EVENT
    ROLE
  }

  type Query {
    tags: [Tag!]!
    tag(id: Int!): Tag
  }

  input CreateTagInput {
    type: TagType!
    roleId: Int
    eventId: Int
    yearId: Int
    deletedAt: DateTime
  }

  input UpdateTagInput {
    type: TagType
    roleId: Int
    eventId: Int
    yearId: Int
    deletedAt: DateTime
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag!
    updateTag(id: Int!, input: UpdateTagInput!): Tag!
    deleteTag(id: Int!): Tag!
  }
`;
