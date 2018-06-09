import React, { Component } from 'react';
import Rules from '../../components/Rules/Rules';
import {ImageLabel, ImageClock, Wrapper, StyledIcon, Logo, Container, Div, A, Image} from './Home_styles';
import logo from "../../images/business_6.png"

class App extends Component {
  // scroll = (height = window.innerHeight) => {
  //   window.scrollTo(0, 500);
  // }

  render() {
    return (
      <Container>
        <Wrapper>
          <Logo>
            <div>
              </div>
            <div>
              <ImageLabel src="https://fontmeme.com/permalink/180602/1976952e083ea824eefc5355da4602cd.png" />
            </div>
          </Logo>
          <A href="#rules"><StyledIcon><i class="fas fa-angle-down fa-3x"></i></StyledIcon></A>
        </Wrapper>
        <Rules id="rules" />
      </Container>
    );
  }
}

export default App;