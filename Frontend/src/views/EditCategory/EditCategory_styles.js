import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
`;

export const List = styled.div`
    min-height: 100vh;
    width: 25%;
    background-color: ${colors.darkBlue};
    box-shadow: inset -6px -2px 18px #1a4d54;
    
    @media (max-width: 1400px) {
        width: 30%;
    }

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

    @media (max-width: 1400px) {
        width: 70%;
    }

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

export const StyledInput = styled.input`
    width: 200px;
    height: 45px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    outline: none;
    padding-left: 15px;
    
    &:hover {
        box-shadow: 1px 2px 10px #ADADAD;
        transition: all 0.5s ease-in-out;
    } 
        
    &:focus {
        box-shadow: 1px 2px 10px #ADADAD;
        transition: all 0.5s ease-in-out;
    }
    
    ::placeholder {
        color: #ccc;
    }
`;

export const StyledArea = styled.textarea`
    width: 50%;
    height: 70px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    outline: none;
    padding: 15px 0 0 15px;
    
    &:hover {
        box-shadow: 1px 2px 10px #ADADAD;
        transition: all 0.5s ease-in-out;
    }
    
    &:focus {
        box-shadow: 1px 2px 10px #ADADAD;
        transition: all 0.5s ease-in-out;
    }
    
    ::placeholder {
        color: #ccc;
    }
`;

export const Label = styled.label`
    display: block;
    margin: 15px 0 5px 20px;
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
    transition: all 0.5s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: ${colors.orange};
        color: white;
        box-shadow: 1px 2px 10px #c17600;
        transition: all 0.35s ease-in-out;
    }
`;
