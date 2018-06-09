import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10%;
    padding-bottom: 5px;
    width: 120%;

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


