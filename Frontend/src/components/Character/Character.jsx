import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import * as ComponentActions from '../../actions/ComponentActions';

class Character extends Component {
    constructor(props) {
        super(props);

        this.state = {
            character: this.props.character,
            category: this.props.category,
            inactive: ["l-category"],
            active: ["l-name", "l-surname", "l-nickname", "t-description"],
        }
    }

    editComponent = () => {
        ComponentActions.editComponent(this.state.character, this.state.category, this.state.inactive, this.state.active);
    }

    render() {
        return (
            <div>
                <p>
                    { this.state.character.name} {this.state.character.surname}
                    <Icon onClick={this.editComponent} class='ui icon edit icon button'><i class='edit icon'></i></Icon>
                    <Icon onClick={this.deleteComponent} class='ui icon delete icon button'><i class='delete icon'></i></Icon>
                </p>
            </div>
        );
    }
}

export default Character;
