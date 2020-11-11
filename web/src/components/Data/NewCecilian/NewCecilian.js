import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import CecilianForm from "src/components/Data/CecilianForm";

import { QUERY } from "src/components/Data/CeciliansCell";

const CREATE_CECILIAN_MUTATION = gql`
  mutation CreateCecilianMutation($input: CreateCecilianInput!) {
    createCecilian(input: $input) {
      id
    }
  }
`;

const NewCecilian = () => {
  const { addMessage } = useFlash();
  const [createCecilian, { loading, error }] = useMutation(
    CREATE_CECILIAN_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataCecilians());
        addMessage("Cecilian created.", { classes: "rw-flash-success" });
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  );

  const onSave = (input) => {
    createCecilian({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Cecilian</h2>
      </header>
      <div className="rw-segment-main">
        <CecilianForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewCecilian;
