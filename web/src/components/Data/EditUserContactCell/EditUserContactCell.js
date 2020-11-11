import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import UserContactForm from "src/components/Data/UserContactForm";

export const QUERY = gql`
  query FIND_USER_CONTACT_BY_ID($id: Int!) {
    userContact: userContact(id: $id) {
      id
      userId
      type
      customType
      value
      notes
      visibility
      createdAt
      updatedAt
      deletedAt
      userProfileId
    }
  }
`;
const UPDATE_USER_CONTACT_MUTATION = gql`
  mutation UpdateUserContactMutation(
    $id: Int!
    $input: UpdateUserContactInput!
  ) {
    updateUserContact(id: $id, input: $input) {
      id
      userId
      type
      customType
      value
      notes
      visibility
      createdAt
      updatedAt
      deletedAt
      userProfileId
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ userContact }) => {
  const { addMessage } = useFlash();
  const [updateUserContact, { loading, error }] = useMutation(
    UPDATE_USER_CONTACT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataUserContacts());
        addMessage("UserContact updated.", { classes: "rw-flash-success" });
      },
    }
  );

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      userId: parseInt(input.userId),
      userProfileId: parseInt(input.userProfileId),
    });
    updateUserContact({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit UserContact {userContact.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <UserContactForm
          userContact={userContact}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
