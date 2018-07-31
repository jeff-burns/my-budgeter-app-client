import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class CreateAccount extends React.Component {
  render() {
    return (
        <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="youremail@email.com" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Create Password" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword2">Re-Enter Password</Label>
          <Input type="password" name="password2" id="examplePassword2" placeholder="Re-Enter Password" />
        </FormGroup>
        <Button color="primary" size="sm">Create Account</Button>{' '}

      </Form>
    );
  }
}