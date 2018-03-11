import React, { Component } from 'react';
import { Container } from '../../utils/styledComponents';
import { Wrapper } from './Navbar_styles';
import Link from '../Link/Link';

class Navbar extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <div class="ui secondary pointing menu">
                        <div class="right menu">
                            <Link to="/categories/display" content="Categories" />
                            <Link to="/categories/add" content="Add category" />                            
                            <Link to="/categories/edit" content="Edit category" />
                        </div>
                    </div>
                </Wrapper>
            </Container>
        );
    }
}

export default Navbar;
