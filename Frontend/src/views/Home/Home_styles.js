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
   
`;

export const A = styled.a`
   &:hover {
       cursor: pointer;
   }
`;

export const Div = styled.div`
    position: absolute;
    height: 50vh;
    width: 100vw;
    margin: 50vh;
    background: ${colors.darkBlue};
`

export const Wrapper = styled.div`
    position: absolute;
    left: 15%;
    height: 600px;
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