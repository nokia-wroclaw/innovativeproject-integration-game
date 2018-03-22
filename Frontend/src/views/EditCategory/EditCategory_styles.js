import styled from 'styled-components';
import { colors } from '../../utils/styles';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const List = styled.div`
    height: 100vh;
    width: 25%;
    background-color: ${colors.blue};
`;

export const Wrapper = styled.div`
    height: 100vh;
    width: 75%;
`;

export const Form = styled.div`
    height: 50px;
    width: 90%;
    margin: 50px auto 0 auto;
`;