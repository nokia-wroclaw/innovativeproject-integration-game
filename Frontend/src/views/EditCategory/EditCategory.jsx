import React, { Component } from 'react';
import { Container } from '../../utils/styledComponents';
import { Form } from 'semantic-ui-react'


class EditCategory extends Component {
    render() {
        return (
            <Container>
                Edit Category & Characters

  <Form>
    <Form.Group widths='equal'>
      <Form.Input fluid label='First name' placeholder='First name' />
      <Form.Input fluid label='Last name' placeholder='Last name' />
    </Form.Group>
  </Form>
            </Container>
        );
    }
}

export default EditCategory;