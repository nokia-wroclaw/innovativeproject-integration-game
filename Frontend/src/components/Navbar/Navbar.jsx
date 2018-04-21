import React, { Component } from 'react';
import { Wrapper, StyledItem, Link } from './Navbar_styles';
import { Menu } from 'semantic-ui-react';

export default class Navbar extends Component {
  state = { activeItem: "" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state;
    
    return (
      <Wrapper>
        <Link to="/">Home</Link>
        <Link to="/categories/edit">Edit</Link>
      </Wrapper>
    )
  }
}
