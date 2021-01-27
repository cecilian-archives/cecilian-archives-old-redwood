export const eventSearchQuery = gql`
  query EventTagInputQuery($needle: String) {
    searchResults: searchEvents(needle: $needle) {
      id
      type
      name
      inherentYear {
        slug
        name
      }
    }
  }
`;

export const eventCreationMutation = gql`
  mutation CreateEventMutation($input: CreateEventInput!) {
    newEntity: createEvent(input: $input) {
      id
      type
      name
    }
  }
`;
