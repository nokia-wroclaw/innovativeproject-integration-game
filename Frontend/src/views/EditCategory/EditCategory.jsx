import React, { Component } from 'react';
import { Container, Wrapper, List } from './EditCategory_styles';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import Header from '../../components/Header/Header';

class EditCategory extends Component {
    render() {
        return (
            <Container>
                <List>
                    <CategoriesList />
                </List>
                <Wrapper>
                    <Header label="Edit categories and charakters" />
                </Wrapper>
            </Container>
        );
    }
}

export default EditCategory;