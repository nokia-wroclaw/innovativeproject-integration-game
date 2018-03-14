import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Link extends Component {
    render() {
        return (
            <NavLink 
                to={this.props.to} 
                className="ui item" 
                activeClassName="item active">
                {this.props.content}
            </NavLink>
        );
    }
}

export default Link;
