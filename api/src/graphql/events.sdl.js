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
    "inherentYear" # Shows may only have an inherentYear
    SHOW
    "inherentYear" # Anniversaries may only have an inherentYear
    ANNIVERSARY
    "year" # Events may have an associated year
    EVENT
  }

  type Query {
    events: [Event!]!
    searchEvents(needle: String, skip: Int, take: Int): [Event!]!
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
