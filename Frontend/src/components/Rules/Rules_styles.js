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
    height: 150%;
    border-top: 3px solid ${colors.orange};

    @media (max-width: 1200px) {
        height: 140%;
    }
    @media (max-width: 1055px) {
        height: 180%;
    }


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
    font-size: 120%;
    line-height: 25px;
    padding-top: 20px;
`;

