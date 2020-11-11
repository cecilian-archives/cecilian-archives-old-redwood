import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import YearForm from "src/components/Data/YearForm";

export const QUERY = gql`
  query FIND_YEAR_BY_ID($id: Int!) {
    year: year(id: $id) {
      id
      slug
      name
      startDate
      endDate
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
const UPDATE_YEAR_MUTATION = gql`
  mutation UpdateYearMutation($id: Int!, $input: UpdateYearInput!) {
    updateYear(id: $id, input: $input) {
      id
      slug
      name
      startDate
      endDate
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ year }) => {
  const { addMessage } = useFlash();
  const [updateYear, { loading, error }] = useMutation(UPDATE_YEAR_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataYears());
      addMessage("Year updated.", { classes: "rw-flash-success" });
    },
  });

  const onSave = (input, id) => {
    updateYear({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Year {year.id}</h2>
      </header>
      <div className="rw-segment-main">
        <YearForm year={year} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  );
};
