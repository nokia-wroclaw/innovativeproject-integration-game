import React, { Component } from 'react';
// import { Accordion } from 'semantic-ui-react';
// import AccordionElement from '../../components/AccordionElement/AccordionElement';
import { Header, CategoryName, Character, Wrapper, CategoryFlexbox, CharacterFlexbox } from './CategoriesList_styles';
import Modifier from '../../components/Modifier/Modifier';

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
            <div>
                <Header>List of categories</Header>
                {/* <StyledAccordion>
                    <StyledAccordionElement activeIndex="0" index="0" name="Actors" names={this.state.actors} />
                    <StyledAccordionElement activeIndex="1" index="1" name="Sportsmen" names={this.state.sportsmen} />
                </StyledAccordion> */}
                <Wrapper>
                    {
                        Object.keys(this.state).map((category) => (
                            <div>
                                <CategoryFlexbox>
                                    <CategoryName>{category}</CategoryName>
                                    <Modifier label="edit" />
                                    <Modifier label="delete" />
                                    <Modifier label="add" />
                                </CategoryFlexbox>

                                    {this.state[category].map((character) => (
                                        <CharacterFlexbox>
                                            <Character>{character}</Character>
                                            <Modifier label="edit" />
                                            <Modifier label="delete" />
                                        </CharacterFlexbox>
                                    ))}
                                    <br/>    
                            </div>
                        ))
                    }
                </Wrapper>
            </div>
        );
    }
}

export default Navbar;
