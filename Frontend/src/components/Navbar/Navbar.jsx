import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper, StyledItem } from './Navbar_styles';
import { Menu } from 'semantic-ui-react';

export default class Navbar extends Component {
  state = { activeItem: "" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state;
    
    return (
      <Wrapper>
        <Menu secondary>
          <Menu.Menu position='right'>
              <NavLink to="/categories/add"> 
                  <StyledItem name="Add category" active={activeItem === "Add category"} onClick={this.handleItemClick} />
              </NavLink>
              
              <NavLink to="/categories/edit"> 
                  <StyledItem name="Edit category" active={activeItem === "Edit category"} onClick={this.handleItemClick} />
              </NavLink>
          </Menu.Menu>
       </Menu>
      </Wrapper>
    )
  }
}
