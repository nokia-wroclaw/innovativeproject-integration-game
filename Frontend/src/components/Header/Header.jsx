import React, { Component } from 'react';
import { Label, Border } from './Header_styles';

class EditCategory extends Component {
    render() {
        return (
            <div>
                <Label>
                    {this.props.label}
                </Label>
                <Border />
            </div>
        );
    }
}

export default EditCategory;