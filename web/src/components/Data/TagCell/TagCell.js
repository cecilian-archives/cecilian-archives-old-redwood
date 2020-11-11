import Tag from "src/components/Data/Tag";

export const QUERY = gql`
  query FIND_TAG_BY_ID($id: Int!) {
    tag: tag(id: $id) {
      id
      type
      roleId
      eventId
      yearId
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Tag not found</div>;

export const Success = ({ tag }) => {
  return <Tag tag={tag} />;
};
