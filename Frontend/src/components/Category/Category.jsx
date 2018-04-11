import React, { Component } from 'react';
import * as ComponentActions from '../../actions/ComponentActions';

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
                <button onClick={this.editCategory}>Edit</button>
            </div>
        );
    }
}

export default Category;
