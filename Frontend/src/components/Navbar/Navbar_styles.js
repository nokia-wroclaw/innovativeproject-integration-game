import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';

export const Wrapper = styled.div`
    padding: 15px 40px 0 0;
    position: absolute;
    left: 73%;

    @media (max-width: 1200px) {
        left: 60%;
    }

    @media (max-width: 1055px) {
        left: 50%;
    }

    @media (max-width: 780px) {
        left: 55%;
    }
`;

export const StyledItem = styled(Menu.Item)`
    @media (max-width: 780px) {
        font-size: 70%;
    }
`;
