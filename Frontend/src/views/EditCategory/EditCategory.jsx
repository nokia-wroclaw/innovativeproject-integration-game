import React, { Component } from 'react';
import { Container, Wrapper, List, StyledForm, Label, Button, StyledTextArea, StyledInput, StyledArea } from './EditCategory_styles';
import { Input, Form, TextArea } from 'semantic-ui-react';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import Header from '../../components/Header/Header';
import data from '../../components/CategoriesList/data.json';
import ComponentStore from '../../stores/componentStore';
import ListStore from '../../stores/listStore';
import * as ListActions from '../../actions/ListActions';
import axios from 'axios';


class EditCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ListStore.getAll(),
            char: ComponentStore.getAll(),
        }
    }

    log(value, category, inactive, active) {
        document.getElementById('category').value = category;

        if(value === null) {
            inactive.map((id) => {
                document.getElementById(id).value = "";
            })
        }
        else {
            document.getElementById('name').value = value.name;
            document.getElementById('surname').value = value.surname;
            document.getElementById('nickname').value = value.nickname;
            document.getElementById('description').value = value.description;
        }

        inactive.map((id) => {
            document.getElementById(id).style = "display: none;";
        })

        active.map((id) => {
            document.getElementById(id).style = "display: block;";
        })
      }

    componentWillMount() {
        ListActions.loadData();

        ComponentStore.on("change", () => {
            this.setState({
                char: ComponentStore.getAll(),
            });

            const store = ComponentStore.getAll();
            this.log(store.data, store.category, store.inactive, store.active);
        });

        ListStore.on("change", () => {
            this.setState({
                value: ListStore.getAll(),
            });
        });
    }

    save = () => {
        let categoryId = this.state.char.data.categoryId;
        let id = this.state.char.data.id;

        axios.put(`/api/categories/${categoryId}/people/${id}`, {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            nickname: document.getElementById('nickname').value,
            description: document.getElementById('description').value
        })
          .then((response) => {
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
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
                    <div id="result"></div>
                    <StyledForm id="form">
                        <div id="l-category">
                            <Label>category</Label>
                            <StyledInput id="category" placeholder="category" />
                        </div>
                        <div id="l-name">
                            <Label>name</Label>
                            <StyledInput id="name" placeholder="name" />
                        </div>
                        <div id="l-surname">
                            <Label>surname</Label>
                            <StyledInput id="surname" placeholder="surname" />
                        </div>
                        <div id="l-nickname">
                            <Label>nickname</Label>
                            <StyledInput id="nickname" placeholder="nickname" />
                        </div>
                        <StyledTextArea id="t-description">
                            <Label>description</Label>
                            <StyledArea id="description" placeholder="description" />
                        </StyledTextArea>
                        <Button onClick={this.save}>Save</Button>
                    </StyledForm>
		    
		            {this.props.match.params.category && this.props.match.params.id ? (

                    <div>
                     {this.renderData()}
                    </div>
                    ) : (<div></div>
                    )}

                    <StyledForm />
                </Wrapper>
            </Container>
        );
    }
}

export default EditCategory;