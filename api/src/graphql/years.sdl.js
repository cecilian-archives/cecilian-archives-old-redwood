export const schema = gql`
  type Year {
    id: Int!
    slug: String!
    name: String!
    startDate: DateTime
    endDate: DateTime
    events: [Event]!
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
    inTags: [Tag]!
  }

  type Query {
    years: [Year!]!
    year(id: Int!): Year
  }

  input CreateYearInput {
    slug: String!
    name: String!
    startDate: DateTime
    endDate: DateTime
    deletedAt: DateTime
  }

  input UpdateYearInput {
    slug: String
    name: String
    startDate: DateTime
    endDate: DateTime
    deletedAt: DateTime
  }

  type Mutation {
    createYear(input: CreateYearInput!): Year!
    updateYear(id: Int!, input: UpdateYearInput!): Year!
    deleteYear(id: Int!): Year!
  }
`;
