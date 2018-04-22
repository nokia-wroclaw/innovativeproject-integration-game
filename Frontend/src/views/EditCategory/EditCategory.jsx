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

    log(value, category, inactive, active, action) {
        if(action === "addCharacter") {
            inactive.map((id) => {
                document.getElementById(id).style = "display: none;";
            })

            active.map((id) => {
                document.getElementById(id).style = "display: block;";
                document.getElementById(id).value = "";
            })
        }
        else if (action === "deleteCharacter" || action === "deleteCategory") {
      }
        else {
            document.getElementById('category').value = category;

            if(value === null) {
                inactive.map((id) => {
                    document.getElementById(id).value = "";
                })
            }
            else {
                document.getElementById('name').value = value.name;
                document.getElementById('surname').value = value.surname;

                if(value.nickname === ' ') {
                    document.getElementById('nickname').value = "";
                } else {
                    document.getElementById('nickname').value = value.nickname;
                }

                if(value.description === ' ') {
                    document.getElementById('description').value = "";
                } else {
                    document.getElementById('description').value = value.description;
                }
            }

            inactive.map((id) => {
                document.getElementById(id).style = "display: none;";
            })

            active.map((id) => {
                document.getElementById(id).style = "display: block;";
            })
        }
      }

    componentWillMount() {
        ListActions.loadData();

        ComponentStore.on("change", () => {
            this.setState({
                char: ComponentStore.getAll(),
            });

            const store = ComponentStore.getAll();
            this.log(store.data, store.category, store.inactive, store.active, store.action);
            
            if(store.action === "deleteCharacter") this.deleteCharacter(store.data.categoryId, store.data.id);
            if(store.action === "deleteCategory") this.deleteCategory(store.id);
        });

        ListStore.on("change", () => {
            this.setState({
                value: ListStore.getAll(),
            });
        });
    }

    deleteCategory = (categoryId) => {
        axios.delete(`/api/categories/${categoryId}`)
          .then((response) => {
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    deleteCharacter = (categoryId, id) => {
        axios.delete(`/api/categories/${categoryId}/people/${id}`)
          .then((response) => {
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    saveAddedCharacter = () => {
        let categoryId = this.state.char.id;

        axios.post(`/api/categories/${categoryId}/people`, {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            nickname: document.getElementById('nickname').value,
        })
          .then((response) => {
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    saveAddedCategory = () => {
        axios.post('/api/categories', {
            name: document.getElementById('category').value,
        })
          .then((response) => {
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    saveEditedCategory = () => {
        let categoryId = this.state.char.id;

        axios.put(`/api/categories/${categoryId}`, {
            name: document.getElementById('category').value,
        })
          .then((response) => {
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    saveEditedCharacter = () => {
        if(document.getElementById('nickname').value.length === 0) {
            document.getElementById('nickname').value = ' ';
        }  
        
        if(document.getElementById('description').value.length === 0) {
            document.getElementById('description').value = ' ';
        }  

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
 
    save = () => {
        if(this.state.char.action === "editCharacter") {
            this.saveEditedCharacter()
        } 
        else if(this.state.char.action === "editCategory") {
            this.saveEditedCategory()
        }
        else if(this.state.char.action === "addCategory") {
            this.saveAddedCategory()
        } 
        else if(this.state.char.action === "addCharacter") {
            this.saveAddedCharacter()
        }
        else {
            window.alert("I dont think so")
        }
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
		    


                </Wrapper>
            </Container>
        );
    }
}

export default EditCategory;