import React, { Component } from 'react';
import * as ComponentActions from '../../actions/ComponentActions';

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: this.props.category,
            inactive: ["name", "surname", "nickname", "description"],
        }
    }

    editCategory = () => {
        ComponentActions.editCategory(this.state.category, this.state.inactive);
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
