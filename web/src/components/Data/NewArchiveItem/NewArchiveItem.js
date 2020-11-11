import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import ArchiveItemForm from "src/components/Data/ArchiveItemForm";

import { QUERY } from "src/components/Data/ArchiveItemsCell";

const CREATE_ARCHIVE_ITEM_MUTATION = gql`
  mutation CreateArchiveItemMutation($input: CreateArchiveItemInput!) {
    createArchiveItem(input: $input) {
      id
    }
  }
`;

const NewArchiveItem = () => {
  const { addMessage } = useFlash();
  const [createArchiveItem, { loading, error }] = useMutation(
    CREATE_ARCHIVE_ITEM_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataArchiveItems());
        addMessage("ArchiveItem created.", { classes: "rw-flash-success" });
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
      authorId: parseInt(input.authorId),
      createdById: parseInt(input.createdById),
      updatedById: parseInt(input.updatedById),
    });
    createArchiveItem({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ArchiveItem</h2>
      </header>
      <div className="rw-segment-main">
        <ArchiveItemForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewArchiveItem;
