import React, { Component } from 'react';
import { Paragraph } from './Modifier_styles';

class Modifier extends Component {
    render() {
        return (
            <Paragraph onClick={this.props.onClick}>{this.props.label}</Paragraph>


        );
    }
}

export default Modifier;