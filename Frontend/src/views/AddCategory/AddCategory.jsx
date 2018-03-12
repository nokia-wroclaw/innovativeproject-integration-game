import React, { Component } from 'react';
import { Container } from '../../utils/styledComponents';
import { Input, Form } from 'semantic-ui-react'

class AddCategory extends Component {
    render() {
        return (
            <Container>
                Add Categories & Charakters
                <Form>
                    <Form.Group widths='equal'>
                    <Form.Input fluid id='form-subcomponent-shorthand-input-categories' label='Categories' placeholder='Categories' />
                    <Form.Input fluid id='form-subcomponent-shorthand-input-charakters' label='Charakters' placeholder='Charakters' />
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default AddCategory;