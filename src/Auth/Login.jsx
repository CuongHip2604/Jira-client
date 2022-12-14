import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "shared/components";
import useApi from 'shared/hooks/api';
import { storeAuthToken } from "shared/utils/authToken";
import toast from "shared/utils/toast";
import {
  Actions,
  FormContainer,
  FormElement,
  FormHeading,
  FormWrapper,
  SignUpText
} from "./styles";

const Login = () => {
  const { mutate: login, isLoading } = useApi.post('auth/signin', {
    onSuccess: (res) => {
      toast.success('Sign in is successfull.');
      storeAuthToken(res.data.accessToken)
      navigate('/')
    },
    onError: (error) =>{
      toast.error(error)
    }
  });
  const navigate = useNavigate()

  const handleOnSubmit = (values) => {
    login({
      ...values
    })
  }

  return (
    <FormContainer>
      <FormWrapper>
        <Form
          enableReinitialize
          initialValues={{
            email: "",
            password: "",
          }}
          validations={{
            email: [Form.is.required(), Form.is.email()],
            password: [Form.is.required(), Form.is.minLength(6), Form.is.maxLength(20),Form.is.password()],
          }}
          onSubmit={handleOnSubmit}
        >
          <FormElement>
            <FormHeading>Sign in</FormHeading>
            <Form.Field.Input name="email" label="Email" />
            <Form.Field.Input
              name="password"
              label="Password"
              type="password"
            />
            <Actions>
              <Button type="submit" variant="primary" isWorking={isLoading}>
                Sign in
              </Button>
            </Actions>
            <SignUpText>
              Do not have an account yet? <Link to="/auth/register">Sign up</Link> now
            </SignUpText>
          </FormElement>
        </Form>
      </FormWrapper>
    </FormContainer>
  );
};

export default Login;
