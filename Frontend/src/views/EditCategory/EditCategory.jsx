import React, { Component } from 'react';
import { Container, Wrapper, List, Form } from './EditCategory_styles';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import Header from '../../components/Header/Header';
import ComponentStore from '../../stores/componentStore';


class EditCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ComponentStore.getAll(),
        }
    }

    componentWillMount() {
        ComponentStore.on("change", () => {
            this.setState({
                value: ComponentStore.getAll(),
            });
        });
    }

    log(value) {
        document.getElementById('input').value = value;
      }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState);
        this.log(nextState.value.value);
      }

    render() {
        return (
            <Container>
                <List>
                    <CategoriesList />
                </List>
                <Wrapper>
                    <Header label="Edit categories and characters" />
                    <Form id="form">
                        <label>{Object.keys(this.state.value)[0]}</label>
                        <input id="input" />
                        <button>Save</button>
                    </Form>
                </Wrapper>
            </Container>
        );
    }
}

export default EditCategory;