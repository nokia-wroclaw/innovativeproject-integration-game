import React, { Component } from 'react';
import Rules from '../../components/Rules/Rules';
import { ImageLabel, ImageClock, Wrapper, StyledIcon, Logo, Container } from './Home_styles';
// import clock from '../../images/clock-icon.png'
// import clock from '../../../public/alarm-clock.svg';

class App extends Component {
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
          
            <a href="#rules"><StyledIcon><i class="fas fa-angle-down fa-3x"></i></StyledIcon></a>
          
        </Wrapper>
          <Rules id="rules" />
      </Container>
    );
  }
}

export default App;