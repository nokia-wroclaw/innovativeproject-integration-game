import React, { Component } from 'react';
import { Container } from '../../utils/styledComponents';
import { Input, Form, Button } from 'semantic-ui-react'
import { Wrapper1 } from './AddCategory_styles';



class AddCategory extends Component {
    render() {
        return (
            <Container>
            <Wrapper1>
                Add Categories & Charakters
                <p>
                You can add all informations about chcarakters
                </p>
                <Form>
                    <Form.Group widths='equal'>
                    <Form.Input fluid id='form-subcomponent-shorthand-input-categories' label='Categories' placeholder='Categories' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                    <Form.Input fluid id='form-subcomponent-shorthand-input-charakters-first-name' label='Charakters First Name' placeholder='Charakters First Name' />
                    <Form.Input fluid id='form-subcomponent-shorthand-input-charakters-last-name' label='Charakters Last Name' placeholder='Charakters Last Name' />
                    <Form.Input fluid id='form-subcomponent-shorthand-input-nick-name' label='Nick Name' placeholder='Nick Name' />
                    </Form.Group>
                 <Button type='Add'>Add</Button>
                </Form>
            </Wrapper1>
            </Container>
        );
    }
}

export default AddCategory;