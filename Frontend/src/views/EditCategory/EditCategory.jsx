import React, { Component } from 'react';
import { Container, Wrapper, List, Form } from './EditCategory_styles';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import Header from '../../components/Header/Header';
import InputForm from '../../components/InputForm/InputForm';
import ComponentStore from '../../stores/componentStore';
import * as ComponentActions from '../../actions/ComponentActions';

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

    editComponent = () => {
        ComponentActions.editComponent(<InputForm/>);
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
                    <button onClick={this.editComponent}>Edit component</button>
                    {/* {Object.keys(this.state.content).map((component) => {
                            return <div>
                                       {this.state.content[component]}
                                    </div>
                        })} */}
                        {this.state.component.component}
                        {console.log(this.state)}
                    </Form>
                </Wrapper>
            </Container>
        );
    }
}

export default EditCategory;