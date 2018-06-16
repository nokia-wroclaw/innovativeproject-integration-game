import styled from 'styled-components';
import { colors } from '../../utils/styles';
import { Icon } from 'semantic-ui-react';
import ReactSVG from 'react-svg';

export const ImageLabel = styled.img`
    width: 90%;
    // padding-left: 170px;
`;

export const Image = styled.img`
    width: 40%;
`;

export const ImageClock = styled(ReactSVG)`
    width: 17%;
    transform: rotate(-20deg);
    left: 10%;
    top: 35%;
    position: absolute;
`;

export const Container = styled.div`
   min-height: 100vh;
`;

export const A = styled.a`
   
`;

export const Wrapper = styled.div`
    position: absolute;
    left: 15%;
    height:70%;
    width: 70%;
    margin: auto;
    margin-top: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 0 8px #aaa;
    border-radius: 5px;
    background-color: #fefefa;
    box-shadow: 0 0 8px lightgray;

        @media (max-width: 1280px) {
            height: 65%
        }

        @media (max-width: 600px) {
            height: 50%
        }

        @media (max-width: 800px) {
            height: 50%
        }


`;

export const StyledIcon = styled(Icon)`
    position: absolute;
    padding-top: 80px;
    color: ${colors.orange};
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 80px;
`;