import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import UserContactForm from "src/components/Data/UserContactForm";

import { QUERY } from "src/components/Data/UserContactsCell";

const CREATE_USER_CONTACT_MUTATION = gql`
  mutation CreateUserContactMutation($input: CreateUserContactInput!) {
    createUserContact(input: $input) {
      id
    }
  }
`;

const NewUserContact = () => {
  const { addMessage } = useFlash();
  const [createUserContact, { loading, error }] = useMutation(
    CREATE_USER_CONTACT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataUserContacts());
        addMessage("UserContact created.", { classes: "rw-flash-success" });
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
      userId: parseInt(input.userId),
      userProfileId: parseInt(input.userProfileId),
    });
    createUserContact({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New UserContact</h2>
      </header>
      <div className="rw-segment-main">
        <UserContactForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewUserContact;
