import React, { Component } from 'react';
import { Container } from '../../utils/styledComponents';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <Container>
                <Link to="/categories">
                    Categories
                </Link>
                <Link to="/categories/add">
                    Add category
                </Link>
                <Link to="/categories/edit">
                    Edit category
                </Link>
            </Container>
        );
    }
}

export default Navbar;
