import React, { Component } from 'react';
import { Label, Border, Wrapper } from './Header_styles';

class EditCategory extends Component {
    render() {
        return (
            <Wrapper>
                <Label>
                    {this.props.label}
                </Label>
                <Border />
            </Wrapper>
        );
    }
}

export default EditCategory;