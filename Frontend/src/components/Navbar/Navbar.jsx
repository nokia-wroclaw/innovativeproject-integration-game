import React, { Component } from 'react';
import { Container } from '../../utils/styledComponents';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <Container>
                <div class="ui secondary pointing menu">
                    <div class="right menu">
                        <NavLink to="/categories/add" className="ui item" activeClassName="item active">
                            Add category
                        </NavLink>

                        <NavLink to="/categories/edit" className="ui item" activeClassName="item active">
                            Edit category
                        </NavLink>
                        <NavLink to="/categories/display" className="ui item" activeClassName="item active">
                            Categories
                        </NavLink>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Navbar;
