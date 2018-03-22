import styled from 'styled-components';
import { Accordion } from 'semantic-ui-react';
import { colors } from '../../utils/styles';
import AccordionElement from '../AccordionElement/AccordionElement';

export const Header = styled.h1`
    color: #fefefa;
    font-size: 180%;
    font-weight: 700;
    padding: 40px 0 20px 0;
    width: 70%;
    margin: 0 auto;
    border-bottom: 3px solid ${colors.orange};
`;

export const Wrapper = styled.div`
    width: 70%;
    margin: 40px auto 0 auto;
    color: #fefefa;
`;

export const Character = styled.p`
    margin-right: 10%;
    font-size: 90%;
`;

export const CategoryName = styled.h1`
    font-size: 130%;
    font-weight: 600;
    margin-right: 10%;
`;

export const CategoryFlexbox = styled.div`
    display: flex;
    align-items: center;
`;

export const CharacterFlexbox = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
`;

// export const StyledAccordion = styled(Accordion)`
//    width: 70%;
//    margin: 0 auto;
//    height: 50px;

//    &:hover {
       
//    }
// `;

// export const StyledAccordionElement = styled(AccordionElement)`
//     &:hover {
//         margin-left: 100px;
//     }
// `;