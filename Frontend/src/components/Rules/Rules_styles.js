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

export const Span = styled.p`
    color: ${colors.orange};
    font-weight: 700;
`;

export const Container = styled.div`
    width: 100%;
    margin-top: 100vh;
    position: absolute;
    background-color: ${colors.darkBlue};
    padding: 30px 0;
    color: white;
    min-height: 100vh;
    border-top: 3px solid ${colors.orange};



    // @media (max-width: 1280px) {
    //     height: 145%;
    //     margin-top: 47%;
    //     width: 100%;
    // }

    // @media (max-width: 1200px) {
    //     height: 160%;
    //     margin-top: 47%;
    //     width: 100%;
    // }

    // @media (max-width: 1150px) {
    //     height: 175%;
    //     margin-top: 48%;
    //     width: 100%;
    // }
    // @media (max-width: 1024px) {
    //     height: 175%;
    //     margin-top: 52%;
    // }
    // @media (max-width: 800px) {
    //     height: 260%;
    //     margin-top: 56%;
    // }




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

