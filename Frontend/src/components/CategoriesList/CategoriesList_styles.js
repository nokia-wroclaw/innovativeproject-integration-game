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

export const StyledAccordion = styled(Accordion)`
   width: 70%;
   margin: 0 auto;
   height: 50px;

   &:hover {
       
   }
`;

export const StyledAccordionElement = styled(AccordionElement)`
    &:hover {
        margin-left: 100px;
    }
`;