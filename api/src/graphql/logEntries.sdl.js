export const schema = gql`
  type LogEntry {
    id: Int!
    timestamp: DateTime!
    logLevel: String!
    source: String!
    logLine: String!
  }

  type Query {
    logEntries: [LogEntry!]!
    logEntry(id: Int!): LogEntry
  }

  input CreateLogEntryInput {
    timestamp: DateTime!
    logLevel: String!
    source: String!
    logLine: String!
  }

  input UpdateLogEntryInput {
    timestamp: DateTime
    logLevel: String
    source: String
    logLine: String
  }

  type Mutation {
    createLogEntry(input: CreateLogEntryInput!): LogEntry!
    updateLogEntry(id: Int!, input: UpdateLogEntryInput!): LogEntry!
    deleteLogEntry(id: Int!): LogEntry!
  }
`;
