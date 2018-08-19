import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const CreditPage = (props) => {

  return (
    <Row>
    <Col sm="6">  
      <Card>
        <CardHeader tag="h3">Credit Input</CardHeader>
        <CardBody>
        <Form onSubmit={props.handleCredit}>
        <FormGroup>
          <Label for="exampleNumber" className="text-primary">Income Amount</Label>
          <Input type="text" name="incomeInput" id="exampleNumber" placeholder="Rounded Dollar Amount" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate" className="text-primary">Date</Label>
          <Input type="date" name="incomeDate" id="exampleDate" placeholder="date placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect" className="text-primary">Source/Type</Label>
          <Input type="select" name="incomeSource" id="exampleSelect">
            <option>Basic Income</option>
            <option>Cash</option>
            <option>Investment Income</option>
            <option>Side Job </option>
            <option>Total Leftover from Last Month</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText" className="text-primary">Notes</Label>
          <Input type="textarea" name="incomeNote" id="exampleText" />
        </FormGroup>
          <FormText color="muted">
          Add additional useful details for the source of the income, if needed.
          </FormText>
      
          <Button color="success">Update Budget</Button>
          </Form>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
      </Col>
      
      <Col sm="6">
      <Card>
        <CardHeader tag="h3">Details</CardHeader>
        <CardBody>
        <CardTitle>Total Income for This Month</CardTitle>
        <CardFooter className="text-muted">
        </CardFooter>
          <CardTitle>'currentTotal left for month'</CardTitle>
          <CardFooter className="text-muted">'Days Left In Month'</CardFooter>
          <CardText>'Average $ left per day'</CardText>
        </CardBody>
        <Button>List of Debits/Credits for Month Button (maybe repeating dynamic dropdown for any previous month's data</Button>

        <CardFooter className="text-muted"></CardFooter>
      </Card>
      </Col>

    </Row>
  );
};

export default CreditPage;
// ONCE more than one month has been submitted, allow for averages to be made with all of them