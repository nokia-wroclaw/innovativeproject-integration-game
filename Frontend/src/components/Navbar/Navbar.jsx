import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper } from './Navbar_styles';
import Link from '../Link/Link';
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
            <NavLink to="/categories/display"> 
                  <Menu.Item name="Categories" active={activeItem === "Categories"} onClick={this.handleItemClick} />
              </NavLink>

              <NavLink to="/categories/add"> 
                  <Menu.Item name="Add category" active={activeItem === "Add category"} onClick={this.handleItemClick} />
              </NavLink>
              
              <NavLink to="/categories/edit"> 
                  <Menu.Item name="Edit category" active={activeItem === "Edit category"} onClick={this.handleItemClick} />
              </NavLink>
          </Menu.Menu>
       </Menu>
      </Wrapper>
    )
  }
}
