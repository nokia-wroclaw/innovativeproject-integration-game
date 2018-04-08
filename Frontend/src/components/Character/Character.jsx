import React, { Component } from 'react';
import * as ComponentActions from '../../actions/ComponentActions';

class Character extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // character: this.props.character,
            character: this.props.cos,
        }
    }

    editComponent = () => {
        ComponentActions.editComponent(this.state.character);
    }

    addComponent = () => {
        ComponentActions.addComponent(this.state.category);
    }

    

    render() {
        return (
            <div>
                <p>{this.state.character.name}</p>
                <p>{this.state.character.surname}</p>
                <button onClick={this.editComponent}>Edit</button>
                <button onClick={this.addComponent}>Add</button>
            </div>
        );
    }
}

export default Character;
