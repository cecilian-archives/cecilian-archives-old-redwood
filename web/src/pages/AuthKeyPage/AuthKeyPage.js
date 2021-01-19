import { Redirect, routes } from "@redwoodjs/router";
import { useAuth } from "@redwoodjs/auth";
import styled from "styled-components";
import PageLayout from "src/layouts/PageLayout/PageLayout";
// import {
//   EuiTitle,
//   EuiText,
//   EuiForm,
//   EuiFormRow,
//   EuiFieldText,
//   EuiButton,
// } from "@elastic/eui";
import { ImKey } from "react-icons/im";
import { useMutation } from "@redwoodjs/web";
import { useState } from "react";
import LoadingScreen from "src/components/chrome/LoadingScreen/LoadingScreen";

const CREATE_USER = gql`
  mutation createUserWithKey($input: CreateUserInput!) {
    createUser(input: $input) {
      __typename
      createdAt
    }
  }
`;

const AuthKeyPage = () => {
  const { currentUser, userMetadata, reauthenticate } = useAuth();
  const [createUser, { loading, error }] = useMutation(CREATE_USER);
  const [enteredKey, setEnteredKey] = useState("");

  if (currentUser?.slug)
    return (
      <>
        <LoadingScreen />
        <Redirect to={routes.myProfile()} />
      </>
    );

  const handleEnterClick = async () => {
    await createUser({
      variables: {
        input: {
          key: enteredKey?.trim(),
          firstNames: userMetadata.given_name,
          lastNames: userMetadata.family_name,
          picture: userMetadata.picture,
        },
      },
    });
    await reauthenticate();
  };

  return (
    <PageLayout minimalChrome>
      <div>
        <h1>Enter Your Key</h1>
      </div>
      <div>
        <p>
          To access the archives, you need another Cecilian's archive key for
          verification. If you have one, enter it here.
        </p>
      </div>
      <FormWrapper component="form">
        <div
          label="Archive Key"
          isInvalid={Boolean(error)}
          error={[error?.message]}
        >
          <input
            type="text"
            name="key"
            icon={<ImKey />}
            autoComplete="off"
            value={enteredKey}
            onChange={(e) => setEnteredKey(e.target.value)}
          />
        </div>
        <button
          type="submit"
          fill
          onClick={handleEnterClick}
          isLoading={loading}
        >
          Enter
        </button>
      </FormWrapper>
    </PageLayout>
  );
};

const FormWrapper = styled.div`
  margin: ${({ theme }) => theme.euiSizeXL} 0;
`;

export default AuthKeyPage;
