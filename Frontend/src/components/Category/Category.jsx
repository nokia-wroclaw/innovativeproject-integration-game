import React, { Component } from 'react';
import * as ComponentActions from '../../actions/ComponentActions';
import * as ListActions from '../../actions/ListActions';
import { Icon } from 'semantic-ui-react';
import StyledIcon from './Category_styles';

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            category: this.props.category,
            id: this.props.id,
            inactive: ["l-name", "l-surname", "l-nickname", "t-description"],
            active: ["l-category"],
            editAction: "editCategory",
            addAction: "addCharacter"
        }
    }

    editCategory = () => {
        ComponentActions.editCategory(this.state.data, this.state.category, this.state.inactive, this.state.active, this.state.editAction, this.state.id);
    }

    addCharacter = () => {
        ComponentActions.addCharacter(this.state.data, this.state.category, this.state.active, this.state.inactive, this.state.addAction, this.state.id);
    }

    add = () => {
        console.log("add char");
    }

    render() {
        return (
            <StyledIcon>
                <Icon onClick={this.editCategory} class='ui icon edit icon button'><i class='edit icon'></i></Icon>
                <Icon onClick={this.addCharacter} class='ui icon plus button'><i class='plus icon'></i></Icon>
            </StyledIcon>
        );
    }
}

export default Category;
