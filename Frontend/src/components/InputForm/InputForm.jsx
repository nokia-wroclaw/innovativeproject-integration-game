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
                <input value={this.state.character} placeholder="change the name" />
            </div>
        );
    }
}

export default InputForm;