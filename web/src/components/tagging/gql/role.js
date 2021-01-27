export const roleSearchQuery = gql`
  query RoleTagInputQuery($needle: String) {
    searchResults: searchRoles(needle: $needle) {
      id
      type
      name
      inherentEvent {
        type
        name
        inherentYear {
          slug
          name
        }
      }
    }
  }
`;

export const roleCreationMutation = gql`
  mutation CreateRoleMutation($input: CreateRoleInput!) {
    newEntity: createRole(input: $input) {
      id
      type
      name
    }
  }
`;
