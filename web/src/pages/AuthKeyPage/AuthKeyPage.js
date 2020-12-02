import { Redirect, routes } from "@redwoodjs/router";
import { useAuth } from "@redwoodjs/auth";
import styled from "styled-components";
import AuthLayout from "src/layouts/AuthLayout/AuthLayout";
import LoadingScreen from "src/components/LoadingScreen/LoadingScreen";
import {
  EuiTitle,
  EuiText,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiButton,
} from "@elastic/eui";
import { ImKey } from "react-icons/im";
import { useMutation } from "@redwoodjs/web";
import { useState } from "react";

const CREATE_USER = gql`
  mutation createUserWithKey($input: CreateUserInput!) {
    createUser(input: $input) {
      __typename
      createdAt
    }
  }
`;

const AuthKeyPage = () => {
  const { loading: authLoading, currentUser, reauthenticate } = useAuth();
  const [createUser, { loading, error }] = useMutation(CREATE_USER);
  const [enteredKey, setEnteredKey] = useState("");

  if (authLoading) return <LoadingScreen />;
  if (currentUser?.slug) return <Redirect to={routes.myProfile()} />;

  const handleEnterClick = async () => {
    await createUser({
      variables: { input: { key: enteredKey?.trim() } },
    });
    await reauthenticate();
  };

  return (
    <AuthLayout>
      <EuiTitle>
        <h1>Enter Your Key</h1>
      </EuiTitle>
      <EuiText>
        <p>
          To access the archives, you need another Cecilian's archive key for
          verification. If you have one, enter it here.
        </p>
      </EuiText>
      <FormWrapper component="form">
        <EuiFormRow
          label="Archive Key"
          isInvalid={Boolean(error)}
          error={[error?.message]}
        >
          <EuiFieldText
            name="key"
            icon={<ImKey />}
            autoComplete="off"
            value={enteredKey}
            onChange={(e) => setEnteredKey(e.target.value)}
          />
        </EuiFormRow>
        <EuiButton
          type="submit"
          fill
          onClick={handleEnterClick}
          isLoading={loading}
        >
          Enter
        </EuiButton>
      </FormWrapper>
    </AuthLayout>
  );
};

const FormWrapper = styled(EuiForm)`
  margin: ${({ theme }) => theme.euiSizeXL} 0;
`;

export default AuthKeyPage;
