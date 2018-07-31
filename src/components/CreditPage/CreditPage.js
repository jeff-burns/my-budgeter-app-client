import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Row, Col } from 'reactstrap';
import InputForm from '../InputForm/InputForm'


const CreditPage = (props) => {
  return (
    <Row>

    <Col sm="6">  
    <h1>Credit Page </h1>

      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <InputForm />

          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
      </Col>
      <Col sm="6">
      <Card>
        <CardHeader tag="h3">Featured</CardHeader>
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

export default CreditPage;