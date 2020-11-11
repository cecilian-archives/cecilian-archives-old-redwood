import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import ArchiveItemCecilianForm from "src/components/Data/ArchiveItemCecilianForm";

import { QUERY } from "src/components/Data/ArchiveItemCeciliansCell";

const CREATE_ARCHIVE_ITEM_CECILIAN_MUTATION = gql`
  mutation CreateArchiveItemCecilianMutation(
    $input: CreateArchiveItemCecilianInput!
  ) {
    createArchiveItemCecilian(input: $input) {
      id
    }
  }
`;

const NewArchiveItemCecilian = () => {
  const { addMessage } = useFlash();
  const [createArchiveItemCecilian, { loading, error }] = useMutation(
    CREATE_ARCHIVE_ITEM_CECILIAN_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataArchiveItemCecilians());
        addMessage("ArchiveItemCecilian created.", {
          classes: "rw-flash-success",
        });
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
      itemId: parseInt(input.itemId),
    });
    createArchiveItemCecilian({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New ArchiveItemCecilian
        </h2>
      </header>
      <div className="rw-segment-main">
        <ArchiveItemCecilianForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default NewArchiveItemCecilian;
