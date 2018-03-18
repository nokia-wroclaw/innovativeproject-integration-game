import React, { Component } from 'react';
import { Container } from '../../utils/styledComponents';
import { Form, TextArea } from 'semantic-ui-react'
import { Wrapper1 } from './AddCategory_styles';
import { TitlePage1 } from './AddCategory_styles';
import { Button1 } from './AddCategory_styles';




class AddCategory extends Component {
    render() {
        return (
            <Container>
            <Wrapper1>
            <TitlePage1>
                Add Categories & Charakters
            </TitlePage1>
                <Form>
                    <Form.Group widths='equal'>
                    <Form.Input fluid id='form-subcomponent-shorthand-input-categories' label='Categories' placeholder='Categories' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                    <Form.Input fluid id='form-subcomponent-shorthand-input-charakters-first-name' label='Charakters First Name' placeholder='Charakters First Name' />
                    <Form.Input fluid id='form-subcomponent-shorthand-input-charakters-last-name' label='Charakters Last Name' placeholder='Charakters Last Name' />
                    <Form.Input fluid id='form-subcomponent-shorthand-input-nick-name' label='Nick Name' placeholder='Nick Name' />
                    </Form.Group>
                    <Form.Group widths='equal'>
                    <Form.Input fluid id='form-subcomponent-shorthand-input-description' control={TextArea} label='Description' placeholder='Description' />
                    </Form.Group>

                 <Button1 type='Add'>Add</Button1>
                 <Button1 class='ui icon plus icon button'><i class='plus icon'></i></Button1>


                </Form>
            </Wrapper1>
            </Container>
        );
    }
}

export default AddCategory;