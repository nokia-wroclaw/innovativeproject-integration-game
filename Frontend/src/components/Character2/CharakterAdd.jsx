mport React, { Component } from 'react';
import * as ComponentActions from '../../actions/ComponentActions';

class CharacterAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            character: this.props.character,
        }
    }

    addComponent = () => {
        ComponentActions.addComponent(this.state.character);
    }


    render() {
        return (
            <div>
                <p>{this.state.character}</p>
                <button onClick={this.addComponent}>Add</button>
            </div>
        );
    }
}

export default Character;
