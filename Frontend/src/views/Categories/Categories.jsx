import React, { Component } from 'react';
import { Container } from '../../utils/styledComponents';
import { Wrapper } from './Categories_styles';
import { Accordion } from 'semantic-ui-react'
import AccordionElement from '../../components/AccordionElement/AccordionElement';

export default class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            actors: ["Brad Pitt", "Leonardo DiCaprio", "Al Pacino"],
            sportsmen: ["Justyna Kowalczyk", "Adam Małysz", "Kamil Stoch"],
        };
    }

    render() {
        return (
            <Container>
                <Wrapper>
                    <Accordion styled>
                        <AccordionElement activeIndex="0" index="0" name="Actors" names={this.state.actors} />
                        <AccordionElement activeIndex="1" index="1" name="Sportsmen" names={this.state.sportsmen} />
                    </Accordion>
                </Wrapper>
            </Container>
       );
    }
 }

