import React, { Component } from 'react';
import { Container, Wrapper, List, Form } from './EditCategory_styles';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import Header from '../../components/Header/Header';
import data from '../../components/CategoriesList/data.json';
import ComponentStore from '../../stores/componentStore';


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
	              <p>{'Personal data (' + rowdata.category + ')'}</p>
		          <br />
		          <p>{'Name: ' + subRowData.name}</p>
		          <p>{'Surname: ' + subRowData.surname}</p>
		          <p>{'Nickname: ' + ((subRowData.nickname == null) ? ("\n" + ' ---') : (subRowData.nickname + "\n"))}</p>
		          <p>{'Description: ' + ((subRowData.description == null) ? ("\n" + ' ---') : (subRowData.description + "\n"))}</p>
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