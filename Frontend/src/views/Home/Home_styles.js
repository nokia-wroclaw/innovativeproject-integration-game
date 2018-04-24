import styled from 'styled-components';
import { colors } from '../../utils/styles';
import { Icon } from 'semantic-ui-react';
import ReactSVG from 'react-svg';
// import image from '../../../public/shattered.png';

export const ImageLabel = styled.img`
    width: 90%;
    padding-left: 170px;
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
   &:hover {
       cursor: pointer;
   }
`;

// export const Div = styled.div`
//     position: absolute;
//     height: 50vh;
//     width: 100vw;
//     margin: 50vh;
//     background: ${colors.darkBlue};
// `

export const Wrapper = styled.div`
    position: absolute;
    left: 15%;
    height:60%;
    width: 70%;
    margin: auto;
    margin-top: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 0 8px #aaa;
    border-radius: 5px;

    background-image: url("../../../shattered.png");

        @media (max-width: 1280px) {
            height: 45%
        }

        @media (max-width: 1200px) {
            height: 44%
        }

        @media (max-width: 1150px) {
            height: 43%
        }

        @media (max-width: 1024px) {
            height: 40%
        }

        @media (max-width: 800px) {
            height: 42%
        }


`;

export const StyledIcon = styled(Icon)`
    position: absolute;
    padding-top: 100px;
    color: ${colors.darkBlue};
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 80px;
`;