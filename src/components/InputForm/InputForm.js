import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class InputForm extends React.Component {
  render() {
    return (
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
          <Label for="exampleSelect">Transaction Source/Type</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
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
    );
  }
}