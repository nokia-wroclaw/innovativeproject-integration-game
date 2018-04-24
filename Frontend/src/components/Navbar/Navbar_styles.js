import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { colors } from '../../utils/styles';

export const Wrapper = styled.div`
    padding: 60px 40px 0 0;
    position: absolute;
    right: 13%;

    @media (max-width: 1280px) {
        right: 1.5%;
    }

    @media (max-width: 1150px) {
        right: 0.5%;
        padding: 30px 20px 0 0;

    }

    @media (max-width: 1024px) {
        right: 3%;
        padding: 20px 10px 0 0;
    }

    @media (max-width: 800px) {
        right: 5%;
        padding: 40px 10px 0 0;
    }
`;

export const StyledItem = styled(Menu.Item)`
    @media (max-width: 780px) {
        font-size: 70%;
    }
`;

export const Link = styled(NavLink)`
    // padding: 20px 40px;
    // text-decoration: none;
    // color: ${colors.orange};
    // font-size: 130%;
    // border: 1px solid ${colors.orange}
    // border-radius: 5px;
    margin-left: 40px;
    padding: 10px 30px;
    border-radius: 5px;
    border: 2px solid ${colors.orange};
    color: ${colors.orange};
    font-size: 110%;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        background-color: ${colors.orange};
        color: white;
        box-shadow: 1px 3px 7px ${colors.darkBlue};
    }

    @media (max-width: 1280px) {

    }
    @media (max-width: 1024px) {

     }
    @media (max-width: 800px) {
   
    }

`;