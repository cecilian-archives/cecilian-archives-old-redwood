import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import YearForm from "src/components/Data/YearForm";

import { QUERY } from "src/components/Data/YearsCell";

const CREATE_YEAR_MUTATION = gql`
  mutation CreateYearMutation($input: CreateYearInput!) {
    createYear(input: $input) {
      id
    }
  }
`;

const NewYear = () => {
  const { addMessage } = useFlash();
  const [createYear, { loading, error }] = useMutation(CREATE_YEAR_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataYears());
      addMessage("Year created.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onSave = (input) => {
    createYear({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Year</h2>
      </header>
      <div className="rw-segment-main">
        <YearForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewYear;
