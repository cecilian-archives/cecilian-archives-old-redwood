export const schema = gql`
  type CecilianTag {
    id: Int!
    cecilian: Cecilian!
    cecilianId: Int!
    tag: Tag!
    tagId: Int!
    addedAt: DateTime!
    removedAt: DateTime
  }

  type Query {
    cecilianTags: [CecilianTag!]!
    cecilianTag(id: Int!): CecilianTag
  }

  input CreateCecilianTagInput {
    cecilianId: Int!
    tagId: Int!
    addedAt: DateTime!
    removedAt: DateTime
  }

  input UpdateCecilianTagInput {
    cecilianId: Int
    tagId: Int
    addedAt: DateTime
    removedAt: DateTime
  }

  type Mutation {
    createCecilianTag(input: CreateCecilianTagInput!): CecilianTag!
    updateCecilianTag(id: Int!, input: UpdateCecilianTagInput!): CecilianTag!
    deleteCecilianTag(id: Int!): CecilianTag!
  }
`;
