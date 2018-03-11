import React, { Component } from 'react';
import { Container } from '../../utils/styledComponents';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <Container>
                <div class="ui secondary pointing menu">
                    <div class="right menu">
                        <Link to="/categories" class="ui item">
                            Categories
                        </Link>
            
                        <Link to="/categories/add" class="ui item">
                            Add category
                        </Link>

                        <Link to="/categories/edit" class="ui item">
                            Edit category
                        </Link>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Navbar;
