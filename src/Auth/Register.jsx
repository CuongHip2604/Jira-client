import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "shared/components";
import useApi from 'shared/hooks/api';
import toast from "shared/utils/toast";
import {
  Actions,
  FormContainer,
  FormElement,
  FormHeading,
  FormWrapper,
  SignUpText
} from "./styles";

const Register = () => {
  const [{ isCreating }, register] = useApi.post('auth/signup');
  const navigate = useNavigate()

  const handleOnSubmit = async (values) => {
    try {
      await register({
        ...values
      })
      toast.success('Sign in is successfull.');
      navigate('/auth/login')
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <FormContainer>
      <FormWrapper>
        <Form
          enableReinitialize
          initialValues={{
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
          }}
          validations={{
            email: [Form.is.required(), Form.is.email()],
            password: [Form.is.required(), Form.is.minLength(6), Form.is.maxLength(20),Form.is.password()],
            confirmPassword: [Form.is.required(), Form.is.match((_, fieldValues) => {
              if (!fieldValues.password || !fieldValues.confirmPassword) return true

              return fieldValues.password === fieldValues.confirmPassword
            }, 'Password does not match')],
            name: [Form.is.required()]
          }}
          onSubmit={handleOnSubmit}
        >
          <FormElement>
            <FormHeading>Sign up</FormHeading>
            <Form.Field.Input name="email" label="Email" />
            <Form.Field.Input name="name" label="Fullname" />
            <Form.Field.Input
              name="password"
              label="Password"
              type="password"
            />
            <Form.Field.Input
              name="confirmPassword"
              label="Confirm password"
              type="password"
            />
            <Actions>
              <Button type="submit" variant="primary" isWorking={isCreating}>
                Sign up
              </Button>
            </Actions>
            <SignUpText>
              Do you already have an account?{" "}
              <Link to="/auth/login">Sign in</Link> now
            </SignUpText>
          </FormElement>
        </Form>
      </FormWrapper>
    </FormContainer>
  );
};

export default Register;
