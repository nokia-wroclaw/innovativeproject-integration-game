import styled from 'styled-components';
import { colors } from '../../utils/styles';
import { Form, Input, TextArea } from 'semantic-ui-react';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
`;

export const List = styled.div`
    min-height: 100vh;
    width: 25%;
    background-color: ${colors.darkBlue};
    border-right: 1px solid #246770;

    @media (max-width: 1200px) {
        width: 30%;
    }

    @media (max-width: 1000px) {
        width: 40%;
    }

    @media (max-width: 780px) {
        width: 50%;
    }
`;

export const Wrapper = styled.div`
    height: 100vh;
    width: 75%;

    @media (max-width: 1200px) {
        width: 70%;
    }
    
    @media (max-width: 1000px) {
        width: 60%;
        position: absolute;
        top: 50px;
        left: 45%;
    }

    @media (max-width: 780px) {
        width: 50%;
        position: absolute;
        top: 50px;
        left: 55%;
    }
`;

export const StyledForm = styled.div`
    width: 90%;
    margin: 50px auto 0 auto;
`;

export const StyledInput = styled(Input)`
    &:hover {
        box-shadow: 1px 3px 9px ${colors.darkBlue};
        border-radius: 4px;
    }
`;

export const StyledArea = styled(TextArea)`
    &:hover {
        box-shadow: 1px 3px 9px ${colors.darkBlue};
        border-radius: 4px;
    }
`;

export const Label = styled.label`
    display: block;
    margin: 15px 0 5px 0;
`;

export const Button = styled.button`
    margin: 40px 0 40px 0;
    width: 150px;
    height: 50px;
    border-radius: 5px;
    border: 2px solid ${colors.orange};
    outline: none;
    background-color: white;
    color: ${colors.orange};
    font-size: 120%;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        background-color: ${colors.orange};
        color: white;
        box-shadow: 1px 3px 7px ${colors.darkBlue};
    }
`;

export const StyledTextArea = styled(Form)`
    width: 50%;
`;
