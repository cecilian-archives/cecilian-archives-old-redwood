import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import ArchiveCollectionForm from "src/components/Data/ArchiveCollectionForm";

import { QUERY } from "src/components/Data/ArchiveCollectionsCell";

const CREATE_ARCHIVE_COLLECTION_MUTATION = gql`
  mutation CreateArchiveCollectionMutation(
    $input: CreateArchiveCollectionInput!
  ) {
    createArchiveCollection(input: $input) {
      id
    }
  }
`;

const NewArchiveCollection = () => {
  const { addMessage } = useFlash();
  const [createArchiveCollection, { loading, error }] = useMutation(
    CREATE_ARCHIVE_COLLECTION_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataArchiveCollections());
        addMessage("ArchiveCollection created.", {
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
      ownerId: parseInt(input.ownerId),
      createdById: parseInt(input.createdById),
      updatedById: parseInt(input.updatedById),
    });
    createArchiveCollection({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New ArchiveCollection
        </h2>
      </header>
      <div className="rw-segment-main">
        <ArchiveCollectionForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default NewArchiveCollection;
