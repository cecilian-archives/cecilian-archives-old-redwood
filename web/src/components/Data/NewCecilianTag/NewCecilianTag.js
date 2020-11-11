import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import CecilianTagForm from "src/components/Data/CecilianTagForm";

import { QUERY } from "src/components/Data/CecilianTagsCell";

const CREATE_CECILIAN_TAG_MUTATION = gql`
  mutation CreateCecilianTagMutation($input: CreateCecilianTagInput!) {
    createCecilianTag(input: $input) {
      id
    }
  }
`;

const NewCecilianTag = () => {
  const { addMessage } = useFlash();
  const [createCecilianTag, { loading, error }] = useMutation(
    CREATE_CECILIAN_TAG_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataCecilianTags());
        addMessage("CecilianTag created.", { classes: "rw-flash-success" });
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  );

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      cecilianId: parseInt(input.cecilianId),
      tagId: parseInt(input.tagId),
    });
    createCecilianTag({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New CecilianTag</h2>
      </header>
      <div className="rw-segment-main">
        <CecilianTagForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewCecilianTag;
