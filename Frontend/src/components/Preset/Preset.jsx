import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import {StyledIcon} from "../Category/Category_styles";
import * as ComponentActions from "../../actions/ComponentActions";

class Preset extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            // category: this.props.category,
            // id: this.props.id,
            inactive: ["l-name", "l-surname", "l-nickname", "t-description", "l-category"],
            active: ["l-preset"],
            editAction: "editPreset",
            addAction: "addCategory",
            deleteAction: "deletePreset",
            category: null,
            inactiveToAddCategory: ["l-name", "l-surname", "l-nickname", "t-description"],
            activeToAddCategory: ["l-category"],
            presetId: 0
        }
    }

    editPreset = () => {
        // ComponentActions.editCategory(this.state.data, this.state.category, this.state.inactive, this.state.active, this.state.editAction, this.state.id);
    };

    addCategory = () => {
        ComponentActions.addCategory(this.state.data, this.state.category, this.state.inactiveToAddCategory, this.state.activeToAddCategory, this.state.addAction);
    };

    deletePreset = () => {
        // ComponentActions.deleteCategory(this.state.deleteAction, this.state.id);
    };

    render() {
        return (
            <StyledIcon>
                <Icon onClick={this.editPreset} class='ui icon edit icon button'><i className='edit icon' /></Icon>
                <Icon onClick={this.addCategory} class='ui icon plus button'><i className='plus icon' /></Icon> <br />
                <Icon onClick={this.deletePreset}  class='ui icon delete icon button'><i className='delete icon' /> </Icon>
            </StyledIcon>
        );
    }
}

export default Preset;
