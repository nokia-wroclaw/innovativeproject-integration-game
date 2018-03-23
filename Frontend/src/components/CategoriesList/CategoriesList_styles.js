import styled from 'styled-components';
import { colors } from '../../utils/styles';

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

export const CategoryFlexbox = styled.div`
    display: flex;
    align-items: center;
`;

export const CharacterFlexbox = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
`;