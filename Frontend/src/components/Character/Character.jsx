import React, { Component } from 'react';
import InputForm from '../../components/InputForm/InputForm';
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


    render() {
        return (
            <div>
                <p>{this.state.character}</p>
                <button onClick={this.editComponent}>Edit</button>
            </div>
        );
    }
}

export default Character;
