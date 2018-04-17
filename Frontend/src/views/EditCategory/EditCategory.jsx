import React, { Component } from 'react';
import { Container, Wrapper, List, StyledForm, Label, Button, StyledTextArea } from './EditCategory_styles';
import { Input, Form, TextArea } from 'semantic-ui-react';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import Header from '../../components/Header/Header';
import data from '../../components/CategoriesList/data.json';
import ComponentStore from '../../stores/componentStore';
import ListStore from '../../stores/listStore';
import * as ListActions from '../../actions/ListActions';


class EditCategory extends Component {
  renderData() {
    return (
      data.map((rowdata, index) => {
        if(rowdata.category === this.props.match.params.category)
	  return (
	    rowdata.people.map((subRowData, k) => {
            if(parseInt(subRowData.id) === parseInt(this.props.match.params.id))
               return (
	            <div>
                    <div>
                    <p>{'Personal data (' + rowdata.category + ')'}</p>
                    <br />
                    <p>{'Name: ' + subRowData.name}</p>
                    <p>{'Surname: ' + subRowData.surname}</p>
                    <p>{'Nickname: ' + ((subRowData.nickname == null) ? ("\n" + ' ---') : (subRowData.nickname + "\n"))}</p>
                    <p>{'Description: ' + ((subRowData.description == null) ? ("\n" + ' ---') : (subRowData.description + "\n"))}</p>
                    </div>
                    
                </div>
	           )
	    })
	  )
      })
    )
  }
       
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
            {console.log(this.state.value)}
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
                    <StyledForm id="form">
                        <div id="l-category">
                            <Label>category</Label>
                            <Input id="category" placeholder="category" />
                        </div>
                        <div id="l-name">
                            <Label>name</Label>
                            <Input id="name" placeholder="name" />
                        </div>
                        <div id="l-surname">
                            <Label>surname</Label>
                            <Input id="surname" placeholder="surname" />
                        </div>
                        <div id="l-nickname">
                            <Label>nickname</Label>
                            <Input id="nickname" placeholder="nickname" />
                        </div>
                        <StyledTextArea id="t-description">
                            <Label>description</Label>
                            <TextArea id="description" placeholder="description" />
                        </StyledTextArea>
                        <Button>Save</Button>
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