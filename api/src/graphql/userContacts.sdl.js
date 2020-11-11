export const schema = gql`
  type UserContact {
    id: Int!
    user: User!
    userId: Int!
    type: UserContactType!
    customType: String
    value: String!
    notes: String
    visibility: Visibility!
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
    UserProfile: UserProfile
    userProfileId: Int
  }

  enum UserContactType {
    ADDRESS
    EMAIL
    PHONE
    CUSTOM
  }
  enum Visibility {
    VISIBLE
    HIDDEN
  }

  type Query {
    userContacts: [UserContact!]!
    userContact(id: Int!): UserContact
  }

  input CreateUserContactInput {
    userId: Int!
    type: UserContactType!
    customType: String
    value: String!
    notes: String
    visibility: Visibility!
    deletedAt: DateTime
    userProfileId: Int
  }

  input UpdateUserContactInput {
    userId: Int
    type: UserContactType
    customType: String
    value: String
    notes: String
    visibility: Visibility
    deletedAt: DateTime
    userProfileId: Int
  }

  type Mutation {
    createUserContact(input: CreateUserContactInput!): UserContact!
    updateUserContact(id: Int!, input: UpdateUserContactInput!): UserContact!
    deleteUserContact(id: Int!): UserContact!
  }
`;
