import React, { Component } from 'react';
import Rules from '../../components/Rules/Rules';
import { ImageLabel, ImageClock, Wrapper, StyledIcon, Logo, Container, Div, A } from './Home_styles';

class App extends Component {
  scroll = (height = window.innerHeight) => {
    window.scrollTo(0, 500);
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <Logo>
            <div>
              <ImageClock path='/alarm-clock.svg' />
            </div>
            <div>
              <ImageLabel src="https://fontmeme.com/permalink/180420/3cf41b4d6384de2d02f28fec3ea28057.png" />
            </div>
          </Logo>
          
            <A onClick={this.scroll}><StyledIcon><i class="fas fa-angle-down fa-3x"></i></StyledIcon></A>
          
        </Wrapper>
        {/* <Div></Div> */}
        <Rules id="rules" />
      </Container>
    );
  }
}

export default App;