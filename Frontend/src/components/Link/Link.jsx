import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { Item } from './Link_styles';

export default class Link extends Component {
    state = { activeItem: "" }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state;

        return (
            <div></div>
        );
    }
}
