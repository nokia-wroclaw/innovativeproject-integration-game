import React, { Component } from 'react';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: this.props.character,
        }
    }

    render() {  
        return (
            <div>
                <input value={this.state.character} />
                <button>Save</button>
            </div>
        );
    }
}

export default InputForm;