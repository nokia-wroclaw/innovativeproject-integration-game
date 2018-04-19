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

        this.stateAdd = {
            data: null,
            category: this.props.category,
            activeAdd: ["name", "surname", "nickname", "description"],
            inactiveAdd: ["category"],


        }

    }

    editCategory = () => {
        ComponentActions.editCategory(this.state.data, this.state.category, this.state.inactive, this.state.active);
    }

    addCategory = () => {
        ComponentActions.addCategory(this.stateAdd.data, this.stateAdd.category, this.stateAdd.inactiveAdd, this.stateAdd.activeAdd);
    }

    render() {
        return (
            <div>
                <button onClick={this.editCategory}>Edit</button>
                <button onClick={this.addCategory}>Add</button>
            </div>
        );
    }
}

export default Category;
