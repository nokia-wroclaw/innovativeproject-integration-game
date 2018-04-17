import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10%;
    padding-bottom: 5px;

    &:hover{
        cursor:pointer;
    }

    &:hover #icons{
        display: block;
    }
`;

export const Icons = styled.div`
    display: none;
`;


