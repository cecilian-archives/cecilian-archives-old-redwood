export const schema = gql`
  type Cecilian {
    id: Int!
    slug: String!
    displayName: String!
    otherNames: String
    user: UserProfile
    tags: [CecilianTag]!
    inArchiveItems: [ArchiveItemCecilian]!
    authoredArchiveItems: [ArchiveItem]!
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    cecilians: [Cecilian!]!
    searchCecilians(needle: String, skip: Int, take: Int): [Cecilian!]!
    cecilian(id: Int!): Cecilian
  }

  input CreateCecilianInput {
    displayName: String!
    otherNames: String
  }

  input UpdateCecilianInput {
    slug: String
    displayName: String
    otherNames: String
    deletedAt: DateTime
  }

  type Mutation {
    createCecilian(input: CreateCecilianInput!): Cecilian!
    updateCecilian(id: Int!, input: UpdateCecilianInput!): Cecilian!
    deleteCecilian(id: Int!): Cecilian!
  }
`;
