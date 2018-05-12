import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';
import {StyledIcon} from "../Category/Category_styles";

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
            addAction: "addPreset",
            deleteAction: "deletePreset"
        }
    }

    editPreset = () => {
        // ComponentActions.editCategory(this.state.data, this.state.category, this.state.inactive, this.state.active, this.state.editAction, this.state.id);
    };

    deletePreset = () => {
        // ComponentActions.deleteCategory(this.state.deleteAction, this.state.id);
    };

    render() {
        return (
            <StyledIcon>
                <Icon onClick={this.editPreset} class='ui icon edit icon button'><i class='edit icon'></i></Icon>
                <Icon onClick={this.deletePreset}  class='ui icon delete icon button'><i class='delete icon'></i> </Icon>
            </StyledIcon>
        );
    }
}

export default Preset;
