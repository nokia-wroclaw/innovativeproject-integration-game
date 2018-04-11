import React, { Component } from 'react';
import * as ComponentActions from '../../actions/ComponentActions';

class Character extends Component {
    constructor(props) {
        super(props);

        this.state = {
            character: this.props.character,
            category: this.props.category,
            inactive: ["category"],
            active: ["name", "surname", "nickname", "description"],
        }
    }

    editComponent = () => {
        ComponentActions.editComponent(this.state.character, this.state.category, this.state.inactive, this.state.active);
    }

    render() {
        return (
            <div>
                <p>{this.state.character.name}</p>
                <p>{this.state.character.surname}</p>
                <button onClick={this.editComponent}>Edit</button>
            </div>
        );
    }
}

export default Character;
