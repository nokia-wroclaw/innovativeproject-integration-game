import React, { Component } from 'react';
import { Header, Wrapper } from './CategoriesList_styles';
import { Accordion } from 'semantic-ui-react'
import AccordionElement from '../../components/AccordionElement/AccordionElement';
import data from './data.json';

class Navbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: data
	};
    }
    
    renderCategories() {
        return (
            this.state.data.map((rowdata, index) =>
                <div>{
                    <AccordionElement activeIndex={index} index={index} name={rowdata.category}
                        names={rowdata.people.map((subRowData, k) => {
	                    return <a href={'/categories/edit/' + rowdata.category + '/' + subRowData.id}>{subRowData.name + " " + subRowData.surname}</a>
                    })}
                />
            }</div>)
        )
    }

    render() {
        return (
            <div>
                <Header>List of categories</Header>
                <Wrapper>
                    <Accordion>
                    {this.renderCategories()}
                    </Accordion>
                </Wrapper>
            </div>
        );
    }
}

export default Navbar;
