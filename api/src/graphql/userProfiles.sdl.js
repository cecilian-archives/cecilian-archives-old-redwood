export const schema = gql`
  type UserProfile {
    id: Int!
    user: User!
    userId: Int!
    cecilian: Cecilian
    cecilianId: Int
    title: String
    firstNames: String
    lastNames: String
    otherNames: [String]!
    contactDetails: [UserContact]!
    anniversary60: Anniversary60Profile
    visibility: Visibility!
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
  }

  enum Visibility {
    VISIBLE
    HIDDEN
  }

  type Query {
    userProfiles: [UserProfile!]!
    userProfile(id: Int!): UserProfile
  }

  input CreateUserProfileInput {
    userId: Int!
    cecilianId: Int
    title: String
    firstNames: String
    lastNames: String
    otherNames: [String]!
    visibility: Visibility!
    deletedAt: DateTime
  }

  input UpdateUserProfileInput {
    userId: Int
    cecilianId: Int
    title: String
    firstNames: String
    lastNames: String
    otherNames: [String]!
    visibility: Visibility
    deletedAt: DateTime
  }

  type Mutation {
    createUserProfile(input: CreateUserProfileInput!): UserProfile!
    updateUserProfile(id: Int!, input: UpdateUserProfileInput!): UserProfile!
    deleteUserProfile(id: Int!): UserProfile!
  }
`;
