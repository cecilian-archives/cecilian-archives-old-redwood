import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import TagForm from "src/components/Data/TagForm";

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
const UPDATE_TAG_MUTATION = gql`
  mutation UpdateTagMutation($id: Int!, $input: UpdateTagInput!) {
    updateTag(id: $id, input: $input) {
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

export const Success = ({ tag }) => {
  const { addMessage } = useFlash();
  const [updateTag, { loading, error }] = useMutation(UPDATE_TAG_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataTags());
      addMessage("Tag updated.", { classes: "rw-flash-success" });
    },
  });

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      roleId: parseInt(input.roleId),
      eventId: parseInt(input.eventId),
      yearId: parseInt(input.yearId),
    });
    updateTag({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Tag {tag.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TagForm tag={tag} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  );
};
