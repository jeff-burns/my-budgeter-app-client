import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Row, Col, Form } from 'reactstrap';

class MyAccountPage extends Component {
    constructor(props) {
        super(props);
        // this.handleToggleMonths = this.handleToggleMonths.bind(this);

        this.state = {}
    }

    render() {
    
        return (

        <Row>
          <Col sm="6">
            <Card>
              <CardHeader tag="h3">My Account</CardHeader>
              <CardBody>
                <Form>
                  <Button color="danger">Show Previous Month(s)</Button>
                </Form>
              </CardBody>
              <CardFooter className="text-muted"></CardFooter>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
            <CardHeader tag="h3">Details for {}</CardHeader>
            <CardBody>
            <CardFooter>Total Income for {}</CardFooter>
            <CardTitle className="text-muted">${}</CardTitle>
            <CardFooter>Income Left for {}</CardFooter>
            <CardTitle className="text-muted">${}</CardTitle>
            <CardFooter>Days Left In {}</CardFooter>
            <CardText className="text-muted">{} Days Left</CardText>
            <CardFooter>Dollars Left To Spend Per Day</CardFooter>
            <CardText className="text-muted">${} to Spend Per Day</CardText>
            </CardBody>
            
              <CardFooter className="text-muted"></CardFooter>
            </Card>
            <Card>
            <CardBody>
            <Button>List of Debits/Credits for Month Button (maybe repeating dynamic dropdown for any previous month's data</Button>
            </CardBody>
            </Card>
          </Col>
        </Row>
      );
    };
};

    export default MyAccountPage;