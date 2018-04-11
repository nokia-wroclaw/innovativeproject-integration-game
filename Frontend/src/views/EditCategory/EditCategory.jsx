import React, { Component } from 'react';
import { Container, Wrapper, List, Form } from './EditCategory_styles';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import Header from '../../components/Header/Header';
import data from '../../components/CategoriesList/data.json';
import ComponentStore from '../../stores/componentStore';
import listStore from '../../stores/listStore';


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
            value: listStore.getAll(),
            char: ComponentStore.getAll(),
        }
    }

    log(value, category, inactive) {
        document.getElementById('category').value = category;
        document.getElementById('name').value = value.name;
        document.getElementById('surname').value = value.surname;
        document.getElementById('nickname').value = value.nickname;
        document.getElementById('description').value = value.description;
        inactive.map((id) => {
            document.getElementById(id).disabled = true;
        })
      }

    componentWillMount() {
        ComponentStore.on("change", () => {
            this.setState({
                char: ComponentStore.getAll(),
            });
            this.log(ComponentStore.getAll().data, ComponentStore.getAll().category, ComponentStore.getAll().inactive);
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
                    <Form id="form">
                        <div>
                            <label>{Object.keys(this.state.value[0])[0]}</label>
                            <input id="category" />
                        </div>
                        <div>
                            <label>{Object.keys(this.state.value[0].people[0])[1]}</label>
                            <input id="name" />
                        </div>
                        <div>
                            <label>{Object.keys(this.state.value[0].people[0])[2]}</label>
                            <input id="surname" />
                        </div>
                        <div>
                            <label>{Object.keys(this.state.value[0].people[0])[3]}</label>
                            <input id="nickname" />
                        </div>
                        <div>
                            <label>{Object.keys(this.state.value[0].people[0])[4]}</label>
                            <input id="description" />
                        </div>
                        <button>Save</button>
                    </Form>
		    
		            {this.props.match.params.category && this.props.match.params.id ? (

                    <div>
                     {this.renderData()}
                    </div>
                    ) : (<div></div>
                    )}

                    <Form />
                </Wrapper>
            </Container>
        );
    }
}

export default EditCategory;