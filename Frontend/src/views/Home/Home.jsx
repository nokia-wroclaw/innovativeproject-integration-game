import React, { Component } from 'react';
import Rules from '../../components/Rules/Rules';
import { Image } from './Home_styles';
import image from '../../images/Image.png';

class App extends Component {
  render() {
    return (
      <div>
        <Image src={image} />
        <Rules />
      </div>
    );
  }
}

export default App;
