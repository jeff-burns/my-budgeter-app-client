import React from 'react';
import { Button, Form, FormGroup, Label, Input, Card, CardBody, Row, Col, CardHeader  } from 'reactstrap';

export default class LogIn extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="4" md={{ size: 4, offset: 1 }}> 
        <Card>
        <CardHeader tag="h3">Log In</CardHeader>

          <CardBody>          
            <Form id="log-in">
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="login-email" placeholder="youremail@email.com" onChange={this.props.acctName}/>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="" placeholder="password" />
              </FormGroup>
              <Button color="primary" size="sm">Log In</Button>{' '}
            </Form>
          </CardBody>
          </Card>
      </Col>
      <Col sm="4" md={{ size: 4, offset: 1 }}>
      <Card>
      <CardHeader tag="h3">Create Account</CardHeader>

      <CardBody>
            
      <Form id="create-account">
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="create-account-email" placeholder="youremail@email.com" />
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
      </CardBody>

      </Card>
      </Col>

      </Row>
    );
  }
}