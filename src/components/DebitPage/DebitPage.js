import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import InputForm from '../InputForm/InputForm'


const DebitPage = (props) => {
  return (
    <Row>
    <Col sm="6"> 

      <Card>
      <CardHeader tag="h3">Debit Input</CardHeader>
      <CardBody>
          <Form>
          <FormGroup>
            <Label for="exampleNumber">Transaction Amount</Label>
            <Input type="text" name="transactionAmount" id="exampleNumber" placeholder="Dollar Amount" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Date</Label>
            <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Transaction Type</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Groceries</option>
              <option>Gas</option>
              <option>Car Maintenance</option>
              <option>Energy Bill(s)</option>
              <option>Internet</option>
              <option>Medicine</option>
              <option>Toiletries</option>
              <option>Recreational</option>
              <option>Insurance</option>
              <option>Computers</option>
              <option>Medical Payments</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Notes</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
        </Form>          
        <Button>Update Budget</Button>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
        </Col>
        <Col sm="6"> 

      <Card>
        <CardHeader tag="h3">List of Expenses Input</CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
      </Col>

      </Row>
  );
};

export default DebitPage;