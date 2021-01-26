export const yearSearchQuery = gql`
  query YearTagInputQuery($needle: String) {
    searchResults: searchYears(needle: $needle) {
      slug
      name
      events {
        type
        name
      }
    }
  }
`;

export const yearCreationMutation = gql`
  mutation CreateYearMutation($input: CreateYearInput!) {
    newEntity: createYear(input: $input) {
      slug
      name
    }
  }
`;
