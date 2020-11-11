export const schema = gql`
  type Anniversary60Profile {
    id: Int!
    userProfile: UserProfile
    userProfileId: Int
    title: String!
    firstname: String!
    surname: String!
    prevNames: String!
    address: String!
    email: String!
    phone: String!
    otherInfo: String!
    wouldLikeTo: String!
    dietary: String!
    updatedAt: DateTime!
  }

  type Query {
    anniversary60Profiles: [Anniversary60Profile!]!
    anniversary60Profile(id: Int!): Anniversary60Profile
  }

  input CreateAnniversary60ProfileInput {
    userProfileId: Int
    title: String!
    firstname: String!
    surname: String!
    prevNames: String!
    address: String!
    email: String!
    phone: String!
    otherInfo: String!
    wouldLikeTo: String!
    dietary: String!
  }

  input UpdateAnniversary60ProfileInput {
    userProfileId: Int
    title: String
    firstname: String
    surname: String
    prevNames: String
    address: String
    email: String
    phone: String
    otherInfo: String
    wouldLikeTo: String
    dietary: String
  }

  type Mutation {
    createAnniversary60Profile(
      input: CreateAnniversary60ProfileInput!
    ): Anniversary60Profile!
    updateAnniversary60Profile(
      id: Int!
      input: UpdateAnniversary60ProfileInput!
    ): Anniversary60Profile!
    deleteAnniversary60Profile(id: Int!): Anniversary60Profile!
  }
`;
