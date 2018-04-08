import React, { Component } from 'react';
import * as ComponentActions from '../../actions/ComponentActions';

class Character extends Component {
    constructor(props) {
        super(props);

        this.state = {
            character: this.props.character,
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
                <p>{this.state.character}</p>
                <button onClick={this.editComponent}>Edit</button>
                <p>{this.state.category}</p>
                <button onClick={this.editComponent}>Add</button>
            </div>
        );
    }
}

export default Character;
