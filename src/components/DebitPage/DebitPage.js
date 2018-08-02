import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

const DebitPage = props => {
  return (
    <Row>
      <Col sm="6">
        <Card>
          <CardHeader tag="h3">Debit Input</CardHeader>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleNumber" className="text-primary">
                  Transaction Amount
                </Label>
                <Input
                  type="text"
                  name="transactionAmount"
                  id="exampleNumber"
                  placeholder="Rounded Dollar Amount"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleDate" className="text-primary">
                  Date
                </Label>
                <Input
                  type="date"
                  name="date"
                  id="exampleDate"
                  placeholder="date placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect" className="text-primary">
                  Transaction Type
                </Label>
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
                <Label for="exampleText" className="text-primary">
                  Notes
                </Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
              <FormText color="muted">
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </FormText>
            </Form>
            <Button color="danger">Update Budget</Button>
          </CardBody>
          <CardFooter className="text-muted">Footer</CardFooter>
        </Card>
      </Col>
      <Col sm="6">
        <Card>
        <CardHeader tag="h3">Details</CardHeader>
        <CardBody>
        <CardFooter className="text-muted">Total Income for This Month</CardFooter>
          <CardTitle>currentTotal left for month</CardTitle>
          <CardFooter className="text-muted">Days Left In Month</CardFooter>
          <CardText>Average $ left per day</CardText>
        </CardBody>
        <Button>List of Debits/Credits for Month Button (maybe repeating dynamic dropdown for any previous month's data</Button>
          <CardFooter className="text-muted"></CardFooter>
        </Card>
      </Col>
    </Row>
  );
};
export default DebitPage;
// ONCE more than one month has been submitted, allow for averages to be made with all of them