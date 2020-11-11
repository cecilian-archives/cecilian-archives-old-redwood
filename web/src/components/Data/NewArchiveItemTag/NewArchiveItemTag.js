import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import ArchiveItemTagForm from "src/components/Data/ArchiveItemTagForm";

import { QUERY } from "src/components/Data/ArchiveItemTagsCell";

const CREATE_ARCHIVE_ITEM_TAG_MUTATION = gql`
  mutation CreateArchiveItemTagMutation($input: CreateArchiveItemTagInput!) {
    createArchiveItemTag(input: $input) {
      id
    }
  }
`;

const NewArchiveItemTag = () => {
  const { addMessage } = useFlash();
  const [createArchiveItemTag, { loading, error }] = useMutation(
    CREATE_ARCHIVE_ITEM_TAG_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataArchiveItemTags());
        addMessage("ArchiveItemTag created.", { classes: "rw-flash-success" });
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
      itemId: parseInt(input.itemId),
      tagId: parseInt(input.tagId),
    });
    createArchiveItemTag({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ArchiveItemTag</h2>
      </header>
      <div className="rw-segment-main">
        <ArchiveItemTagForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewArchiveItemTag;
