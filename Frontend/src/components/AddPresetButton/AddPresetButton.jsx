import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import * as ComponentActions from '../../actions/ComponentActions';

class AddPresetButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            inactive: ["l-category", "l-name", "l-surname", "l-nickname", "t-description"],
            active: ["l-preset"],
            action: "addPreset"
        }
    }

    addPreset = () => {
        ComponentActions.addPreset(this.state.data, this.state.inactive, this.state.active, this.state.action);
    }

    render() {
        return (
            <div>
                <Icon onClick={this.addPreset} class='ui icon plus button'><i class='plus icon' /></Icon> <br />
            </div>
        );
    }
}

export default AddPresetButton;
