import React, { Component } from 'react';
// import { Accordion } from 'semantic-ui-react';
import AccordionElement from '../../components/AccordionElement/AccordionElement';
import { StyledAccordion } from './CategoriesList_styles';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            actors: ["Brad Pitt", "Leonardo DiCaprio", "Al Pacino"],
            sportsmen: ["Justyna Kowalczyk", "Adam Małysz", "Kamil Stoch"],
        };
    }

    render() {
        return (
            <StyledAccordion>
                <AccordionElement activeIndex="0" index="0" name="Actors" names={this.state.actors} />
                <AccordionElement activeIndex="1" index="1" name="Sportsmen" names={this.state.sportsmen} />
             </StyledAccordion>
        );
    }
}

export default Navbar;
