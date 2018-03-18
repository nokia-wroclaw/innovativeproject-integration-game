import React, { Component } from 'react';
import { Container, Wrapper, List } from './EditCategory_styles';
import CategoriesList from '../../components/CategoriesList/CategoriesList';

class EditCategory extends Component {
    render() {
        return (
            <Container>
                <List>
                    <CategoriesList />
                </List>
                <Wrapper />
            </Container>
        );
    }
}

export default EditCategory;