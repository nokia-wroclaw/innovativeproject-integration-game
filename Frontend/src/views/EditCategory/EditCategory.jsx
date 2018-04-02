import React, { Component } from 'react';
import { Container, Wrapper, List, Form } from './EditCategory_styles';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import Header from '../../components/Header/Header';
import data from '../../components/CategoriesList/data.json';

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
		<p>{'Name:' + subRowData.name}</p>
		<p>{'Surname:' + subRowData.surname}</p>
		<p>{'Nickname:' + subRowData.nickname}</p>
		<p>{'Description:' + subRowData.description}</p>
	       </div>
	       )
	   })
	 )
       })
    )
  }
       
    render() {
        return (
            <Container>
                <List>
                    <CategoriesList />
                </List>
                <Wrapper>
                    <Header label="Edit categories and characters" />
		    
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