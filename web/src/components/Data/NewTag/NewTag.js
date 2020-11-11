import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import TagForm from "src/components/Data/TagForm";

import { QUERY } from "src/components/Data/TagsCell";

const CREATE_TAG_MUTATION = gql`
  mutation CreateTagMutation($input: CreateTagInput!) {
    createTag(input: $input) {
      id
    }
  }
`;

const NewTag = () => {
  const { addMessage } = useFlash();
  const [createTag, { loading, error }] = useMutation(CREATE_TAG_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataTags());
      addMessage("Tag created.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      roleId: parseInt(input.roleId),
      eventId: parseInt(input.eventId),
      yearId: parseInt(input.yearId),
    });
    createTag({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Tag</h2>
      </header>
      <div className="rw-segment-main">
        <TagForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewTag;
