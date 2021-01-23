export const cecilianSearchQuery = gql`
  query CecilianTagInputQuery($needle: String) {
    searchResults: searchCecilians(needle: $needle) {
      user {
        picture
      }
      slug
      displayName
      otherNames
      tags {
        tag {
          id
          type
          year {
            slug
            name
          }
        }
      }
    }
  }
`;

export const cecilianCreationMutation = gql`
  mutation CreateCecilianMutation($input: CreateCecilianInput!) {
    newEntity: createCecilian(input: $input) {
      user {
        picture
      }
      slug
      displayName
      otherNames
      tags {
        tag {
          id
          type
          year {
            slug
            name
          }
        }
      }
    }
  }
`;
