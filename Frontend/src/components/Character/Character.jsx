import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import { Wrapper, Icons } from './Character_styles';
import * as ComponentActions from '../../actions/ComponentActions';

class Character extends Component {
    constructor(props) {
        super(props);

        this.state = {
            character: this.props.character,
            category: this.props.category,
            inactive: ["l-preset", "l-category"],
            active: ["l-name", "l-surname", "l-nickname", "t-description"],
            editAction: "editCharacter",
            deleteAction: "deleteCharacter"
        }
    }

    editComponent = () => {
        ComponentActions.editComponent(this.state.character, this.state.category, this.state.inactive, this.state.active, this.state.editAction);
    };

    deleteCharacter = () => {
        ComponentActions.deleteCharacter(this.state.character, this.state.category, this.state.deleteAction);
    };

    render() {
        if (this.props.isDefault === true) {
            return (
                <Wrapper>
                    <div>
                        {this.state.character.name} {this.state.character.surname}
                    </div>
                </Wrapper>
            );
        } else {
            return (
                <Wrapper>
                    <div>
                        {this.state.character.name} {this.state.character.surname}
                    </div>
                    <Icons id="icons">
                        <Icon onClick={this.editComponent} class='ui icon edit icon button'><i className='edit icon' /></Icon>
                        <Icon onClick={this.deleteCharacter} class='ui icon delete icon button'><i className='delete icon' /></Icon>
                    </Icons>
                </Wrapper>
            );
        }
    }
}

export default Character;
