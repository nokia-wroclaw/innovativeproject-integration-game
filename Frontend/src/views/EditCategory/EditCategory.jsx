import React, {Component} from 'react';
import {
    Button,
    Container,
    Label,
    List,
    StyledArea,
    StyledForm,
    StyledInput,
    StyledTextArea,
    Wrapper
} from './EditCategory_styles';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import Header from '../../components/Header/Header';
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

    log(value, category, inactive, active, action, presetName) {
        if(action === "addCharacter") {
            inactive.map((id) => {
                document.getElementById(id).style = "display: none;";
            })

            document.getElementById('name').value = "";
            document.getElementById('surname').value = "";
            document.getElementById('nickname').value = "";
            document.getElementById('description').value = "";

            active.map((id) => {
                document.getElementById(id).style = "display: block;";
            })
        }
        else if (action === "addPreset") {
            document.getElementById('preset').value = "";
        }
        else if (action === "deleteCharacter" || action === "deleteCategory" || action === "deletePreset") {}
        else {
            document.getElementById('category').value = category;
            document.getElementById('preset').value = presetName;

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
            this.log(store.data, store.category, store.inactive, store.active, store.action, store.presetName);
            
            if(store.action === "deleteCharacter") {
                let result = window.confirm("Do you want to delete this character?");
                if (result) {
                    this.deleteCharacter(store.data.categoryId, store.data.id);
                }
            }

            if(store.action === "deleteCategory") {
                let result = window.confirm("Do you want to delete this category?");
                if (result) {
                    this.deleteCategory(store.id);
                }
            }

            if(store.action === "deletePreset") {
                let result = window.confirm("Do you want to delete this preset?");
                if (result) {
                    this.deletePreset(store.presetId);
                }
            }
        });

        ListStore.on("change", () => {
            this.setState({
                value: ListStore.getAll(),
            });
        });
    }

    deleteCategory = (categoryId) => {
        axios.delete(`https://integrationgame.herokuapp.com/api/categories/${categoryId}`)
          .then(() => window.location.reload())
          .catch(error => console.log(error));
    };

    deleteCharacter = (categoryId, id) => {
        axios.delete(`https://integrationgame.herokuapp.com/api/categories/${categoryId}/people/${id}`)
          .then(() => window.location.reload())
          .catch(error => console.log(error));
    };

    deletePreset = (id) => {
        axios.delete(`https://integrationgame.herokuapp.com/api/preset/${id}`)
            .then(() => window.location.reload())
            .catch(error => console.log(error));
    };

    saveAddedCharacter = () => {
        let categoryId = this.state.char.id;

        axios.post(`https://integrationgame.herokuapp.com/api/categories/${categoryId}/people`, {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            nickname: document.getElementById('nickname').value,
        })
        .then(() => window.location.reload())
        .catch(error => console.log(error))
    };

    saveAddedCategory = () => {
        let presetId = this.state.char.presetId;
        console.log("add")

        axios.post(`https://integrationgame.herokuapp.com/api/categories/preset/${presetId}`, {
            name: document.getElementById('category').value,
        })
        .then(() => window.location.reload())
        .catch(error => console.log(error))
    };

    saveEditedCategory = () => {
        let categoryId = this.state.char.id;

        axios.put(`https://integrationgame.herokuapp.com/api/categories/${categoryId}`, {
            name: document.getElementById('category').value,
        })
        .then(() => window.location.reload())
        .catch(error => console.log(error))
    };

    saveEditedCharacter = () => {
        if(document.getElementById('nickname').value.length === 0) {
            document.getElementById('nickname').value = ' ';
        }  
        
        if(document.getElementById('description').value.length === 0) {
            document.getElementById('description').value = ' ';
        }  

        let categoryId = this.state.char.data.categoryId;
        let id = this.state.char.data.id;

        axios.put(`https://integrationgame.herokuapp.com/api/categories/${categoryId}/people/${id}`, {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            nickname: document.getElementById('nickname').value,
            description: document.getElementById('description').value
        })
        .then(() => window.location.reload())
        .catch(error => console.log(error))
    };

    saveEditedPreset = () => {
        let presetId = this.state.char.presetId;

        axios.put(`https://integrationgame.herokuapp.com/api/preset/${presetId}`, {
            name: document.getElementById('preset').value,
        })
        .then(() => window.location.reload())
        .catch((error) => console.log(error))
    };

    saveAddedPreset = () => {
        const isDefault = false;
        axios.post("https://integrationgame.herokuapp.com/api/preset", {
            name: document.getElementById('preset').value,
            isDefault: isDefault
        })
        .then(() => window.location.reload())
        .catch((error) => console.log(error))
    };
 
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
        else if(this.state.char.action === "editPreset") {
            this.saveEditedPreset()
        }
        else if(this.state.char.action === "addPreset") {
            this.saveAddedPreset()
        }
        else {
            window.alert("You did not choose any option")
        }
    };

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
                        <div id="l-preset">
                            <Label>preset</Label>
                            <StyledInput id="preset" placeholder="preset" />
                        </div>
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
                        <div id="t-description">
                            <Label>description</Label>
                            <StyledArea id="description" placeholder="description" />
                        </div>

                        <Button onClick={this.save}>Save</Button>
                    </StyledForm>
                </Wrapper>
            </Container>
        );
    }
}

export default EditCategory;