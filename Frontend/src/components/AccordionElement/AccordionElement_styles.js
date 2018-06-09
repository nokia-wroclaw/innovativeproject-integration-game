import styled from 'styled-components';
import {Accordion} from 'semantic-ui-react'

export const StyledAccordion = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
`;

export const StyledCategory = styled.div`
    margin-top: 10px;
`;

export const StyledContent = styled(Accordion.Content)`
    width: 100%;
    transition: all 3s;
`;

export const StyledTitle = styled(Accordion.Title)`
    &:hover{
        cursor:pointer;
    }
`;

export const Title = styled.p`
    color: white;
    font-weight: bold;
    font-size: 110%;
    font-style: italic;

    &:hover{
        cursor:pointer;
    }

    &:hover #icon{
        display: block;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    padding-bottom: 10px;
`;
