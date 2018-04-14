import React, { Component } from 'react';
import * as ComponentActions from '../../actions/ComponentActions';
import { Icon } from 'semantic-ui-react';

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            category: this.props.category,
            inactive: ["name", "surname", "nickname", "description"],
            active: ["category"],
        }
    }

    editCategory = () => {
        ComponentActions.editCategory(this.state.data, this.state.category, this.state.inactive, this.state.active);
    }

    render() {
        return (
            <div>
                <Icon onClick={this.editCategory} class='ui icon edit icon button'><i class='edit icon'></i></Icon>
            </div>
        );
    }
}

export default Category;
