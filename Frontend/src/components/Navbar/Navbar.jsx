import React, { Component } from 'react';
import { Container } from '../../utils/styledComponents';
// import { NavLink } from 'react-router-dom';
import Link from '../Link/Link';

class Navbar extends Component {
    render() {
        return (
            <Container>
                <div class="ui secondary pointing menu">
                    <div class="right menu">
                        <Link to="/categories/display" content="Categories" />
                        <Link to="/categories/add" content="Add category" />                            
                        <Link to="/categories/edit" content="Edit category" />
                    </div>
                </div>
            </Container>
        );
    }
}

export default Navbar;
