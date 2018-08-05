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
            <Form id="log-in" onSubmit={this.props.logIn}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="userEmail" id="login-email" placeholder="youremail@email.com" onChange={this.props.acctName} value={this.props.userEmail}/>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="" placeholder="password" onChange={this.props.acctName} value={this.props.password}/>
              </FormGroup>
               {(this.props.isDisabled) ? <Button color="primary" size="sm" disabled >Log In</Button> : 
               <Button color="primary" size="sm" >Log In</Button>
              }
              
            </Form>
          </CardBody>
          </Card>
      </Col>
      <Col sm="4" md={{ size: 4, offset: 1 }}>
      <Card>
      <CardHeader tag="h3">Create Account</CardHeader>

      <CardBody>
            
      <Form id="create-account" onSubmit={this.props.createAcct}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="createUserEmail" id="create-account-email" placeholder="youremail@email.com" onChange={this.props.acctName} value={this.props.createUserEmail}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="createPassword" id="examplePassword" placeholder="Create Password" onChange={this.props.acctName} value={this.props.createPassword}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword2">Re-Enter Password</Label>
          <Input type="password" name="createPassword2" id="examplePassword2" placeholder="Re-Enter Password" onChange={this.props.acctName} value={this.props.createPassword2}/>
        </FormGroup>
        {(this.props.isDisabled) ? <Button color="primary" size="sm" disabled >Create Account</Button> : 
               <Button color="primary" size="sm" >Create Account</Button>
              }
       
      </Form>
      </CardBody>

      </Card>
      </Col>

      </Row>
    );
  }
}