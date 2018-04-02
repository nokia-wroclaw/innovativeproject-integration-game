import React, { Component } from 'react';
import { Container, Wrapper, List, Form } from './EditCategory_styles';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import Header from '../../components/Header/Header';
import ComponentStore from '../../stores/componentStore';


class EditCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            component: ComponentStore.getAll(),
        }
    }

    componentWillMount() {
        ComponentStore.on("change", () => {
            this.setState({
                component: ComponentStore.getAll(),
            });
        });
    }

    

    render() {
        return (
            <Container>
                <List>
                    <CategoriesList />
                </List>
                <Wrapper>
                    <Header label="Edit categories and characters" />
                    <Form>
                        {console.log(this.state.component.component)}
                        {this.state.component.component}
                    </Form>
                </Wrapper>
            </Container>
        );
    }
}

export default EditCategory;