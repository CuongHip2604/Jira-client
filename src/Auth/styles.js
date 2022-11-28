import { Form } from "shared/components";
import { color, font } from "shared/utils/styles";
import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${color.secondary};
`;

export const FormWrapper = styled.div`
  min-width: 500px;
  background-color: ${color.white};
`;

export const FormHeading = styled.div`
  padding-bottom: 15px;
  ${font.size(21)}
`;

export const FormElement = styled(Form.Element)`
  padding: 25px 40px 35px;
  border-radius: 8px;
  -webkit-box-shadow: 1px 1px 10px 1px ${color.backgroundMedium};
  -moz-box-shadow: 1px 1px 10px 1px ${color.backgroundMedium};
  box-shadow: 1px 1px 10px 1px ${color.backgroundMedium};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 28px;
  column-gap: 28px;

  button {
    width: 100%;
  }

  a {
    color: ${color.primary};
    text-decoration: underline;
  }
`;

export const SignUpText = styled.div`
  margin-top: 16px;
  text-align: center;

  a {
    color: ${color.primary};
    text-decoration: underline;
  }
`
