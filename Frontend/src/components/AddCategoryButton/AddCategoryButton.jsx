import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import * as ComponentActions from '../../actions/ComponentActions';

class AddCategoryButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            category: null,
            inactive: ["l-name", "l-surname", "l-nickname", "t-description"],
            active: ["l-category"],
            action: "addCategory"
        }
    }

    addCategory = () => {
        ComponentActions.addCategory(this.state.data, this.state.category, this.state.inactive, this.state.active, this.state.action);
    }

    render() {
        return (
            <div>
                <Icon onClick={this.addCategory} class='ui icon plus button'><i class='plus icon' /></Icon> <br />
            </div>
        );
    }
}

export default AddCategoryButton;
