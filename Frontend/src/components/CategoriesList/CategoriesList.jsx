import React, { Component } from 'react';
// import { Accordion } from 'semantic-ui-react';
// import AccordionElement from '../../components/AccordionElement/AccordionElement';
import { StyledAccordion, Header, StyledAccordionElement } from './CategoriesList_styles';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            actors: ["Brad Pitt", "Leonardo DiCaprio", "Al Pacino"],
            sportsmen: ["Justyna Kowalczyk", "Adam Małysz", "Kamil Stoch"],
        };
    }

    renderSth(){
        console.log("it;s work");
    }

    render() {
        return (
            <div>
                <Header onClick={this.renderSth}>List of categories</Header>
                <StyledAccordion>
                    <StyledAccordionElement activeIndex="0" index="0" name="Actors" names={this.state.actors} />
                    <StyledAccordionElement activeIndex="1" index="1" name="Sportsmen" names={this.state.sportsmen} />
                </StyledAccordion>
            </div>
        );
    }
}

export default Navbar;
