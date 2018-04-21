import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const Footer = styled.div`
    tex-align: center;
`;

export const Wrapper = styled.div`
    width: 60%;
   // float: right;
    margin-left: 20%;
`;

export const Container = styled.div`
    width: 100vw;
    margin-top: 100vh;
    position: absolute;
    background-color: ${colors.darkBlue};
    padding: 50px 0;
    color: white;
    height: 100vh;
`;

export const Header = styled.h1`
    text-align: center;
    font-size: 200%;
    font-weight: 800;
    color: ${colors.orange};
    font-family: Arial Black;
`;

export const Paragraph = styled.p`
    text-align: justify;
    fint-size: 110%;
    line-height: 25px;
`;

