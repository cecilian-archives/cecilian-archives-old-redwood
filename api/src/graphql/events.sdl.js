export const schema = gql`
  type Event {
    id: Int!
    type: EventType!
    name: String!
    inherentYear: Year
    inherentYearId: Int
    roles: [Role]!
    startDate: DateTime
    endDate: DateTime
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
    inTags: [Tag]!
  }

  enum EventType {
    SHOW
    ANNIVERSARY
    EVENT
  }

  type Query {
    events: [Event!]!
    event(id: Int!): Event
  }

  input CreateEventInput {
    type: EventType!
    name: String!
    inherentYearId: Int
    startDate: DateTime
    endDate: DateTime
    deletedAt: DateTime
  }

  input UpdateEventInput {
    type: EventType
    name: String
    inherentYearId: Int
    startDate: DateTime
    endDate: DateTime
    deletedAt: DateTime
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event!
    updateEvent(id: Int!, input: UpdateEventInput!): Event!
    deleteEvent(id: Int!): Event!
  }
`;