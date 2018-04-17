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
            inactive: ["l-name", "l-surname", "l-nickname", "t-description"],
            active: ["l-category"],
        }
    }

    editCategory = () => {
        ComponentActions.editCategory(this.state.data, this.state.category, this.state.inactive, this.state.active);
    }

    createChar = (k) => {
        ListActions.createCharacter(k);
    }

    render() {
        return (
            <StyledIcon>
                <Icon onClick={this.editCategory} class='ui icon edit icon button'><i class='edit icon'></i></Icon>
            </StyledIcon>
        );
    }
}

export default Category;
