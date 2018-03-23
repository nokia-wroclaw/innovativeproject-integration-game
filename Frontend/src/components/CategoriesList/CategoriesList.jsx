import React, { Component } from 'react';
import { Header, Wrapper } from './CategoriesList_styles';
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
                <Wrapper>
                   
                </Wrapper>
            </div>
        );
    }
}

export default Navbar;
