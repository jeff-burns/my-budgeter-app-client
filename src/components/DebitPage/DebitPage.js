import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const DebitPage = (props) => {    

  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = today.getMonth()+1; //January is 0!
  var dd = today.getDate();

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  console.log(monthNames[today.getMonth()]);

  const thisMonth = monthNames[today.getMonth()]

  var getDaysInMonth = function(year, month) {
    return new Date(year, month, 0).getDate();
  };
  console.log(getDaysInMonth(yyyy, mm));
  console.log((getDaysInMonth(yyyy, mm)) - dd)
  console.log(dd)

  const daysLeftThisMonth = (getDaysInMonth(yyyy, mm)) - dd;

  // Income Data

  const fillUserIncomeData =  
    props.fetchedUsers.filter(userInstance => {
      if (userInstance.userEmail === props.userEmail) {
        const fetchedDate = userInstance.incomeDate;
            console.log(fetchedDate)
        const fetchedYear = fetchedDate.slice(0, 4)
            console.log(fetchedYear)
        const fetchedMonth = fetchedDate.slice(5, 7);
            console.log(fetchedMonth)
          if (yyyy == fetchedYear && mm == fetchedMonth)
            return userInstance
        }
    })
    
  console.log(fillUserIncomeData)

  const userIncomeSources = 
    fillUserIncomeData.map(user => {
      return user.incomeSource + " note- " + user.incomeNote
    })

  console.log(userIncomeSources)

  const userIncome = 
    fillUserIncomeData.map(user => {
      return user.incomeInput
    })
    
  console.log(userIncome)

  const userTotalIncome4Month = 
    userIncome.reduce((result, number) => {
      result += number;
      return result
    }, 0)

  console.log(userTotalIncome4Month)

  // Expense Data

  const fillUserExpenseData =  
    props.fetchedUsers.filter(userInstance => {
      if (userInstance.userEmail === props.userEmail) {
        const fetchedDate = userInstance.expenseDate;
            console.log(fetchedDate)
        const fetchedYear = fetchedDate.slice(0, 4)
            console.log(fetchedYear)
        const fetchedMonth = fetchedDate.slice(5, 7);
            console.log(fetchedMonth)
          if (yyyy == fetchedYear && mm == fetchedMonth)
            return userInstance
        }
    })
    
  console.log(fillUserExpenseData)

  const userExpenseTypes = 
    fillUserExpenseData.map(user => {
      return user.expenseType + " note- " + user.expenseNote
    })

  console.log(userExpenseTypes)

  const userExpense = 
    fillUserExpenseData.map(user => {
      return user.expenseAmount
    })
    
  console.log(userExpense)

  const userTotalExpenses4Month = 
    userExpense.reduce((result, number) => {
      result += number;
      return result
    }, 0)

  console.log(userTotalExpenses4Month)

  const dollarsLeft4Month = 
    userTotalIncome4Month - userTotalExpenses4Month

  console.log(dollarsLeft4Month)
  console.log(dollarsLeft4Month / daysLeftThisMonth)
  console.log(Math.floor(dollarsLeft4Month / daysLeftThisMonth))

  const dollarsLeftPerDay = Math.floor(dollarsLeft4Month / daysLeftThisMonth)


  return (

    <Row>
      <Col sm="6">
        <Card>
          <CardHeader tag="h3">Debit Input</CardHeader>
          <CardBody>
            <Form onSubmit={props.handleDebit}>
              <FormGroup>
                <Label for="exampleNumber" className="text-primary">
                  Transaction Amount
                </Label>
                <Input
                  type="text"
                  name="expenseAmount"
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
                  name="expenseDate"
                  id="exampleDate"
                  placeholder="date placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect" className="text-primary">
                  Transaction Type
                </Label>
                <Input type="select" name="expenseType" id="exampleSelect">
                  <option>Groceries</option>
                  <option>Gas</option>
                  <option>Car Maintenance</option>
                  <option>Rent/Mortgage</option>
                  <option>Energy Bill(s)</option>
                  <option>Phone</option>
                  <option>Internet</option>
                  <option>Medicine</option>
                  <option>Toiletries</option>
                  <option>Recreational</option>
                  <option>Insurance</option>
                  <option>Computers</option>
                  <option>Savings</option>
                  <option>Medical Payments</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText" className="text-primary">
                  Notes
                </Label>
                <Input type="textarea" name="expenseNote" id="exampleText" />
              </FormGroup>
              <FormText color="muted">
                Add additional useful details for the type of expense, if needed.
              </FormText>
              <Button color="danger">Update Budget</Button>
            </Form>
          </CardBody>
          <CardFooter className="text-muted"></CardFooter>
        </Card>


      </Col>
      <Col sm="6">
        <Card>
        <CardHeader tag="h3">Details for {thisMonth}</CardHeader>
        <CardBody>
        <CardFooter>Total Income for {thisMonth}</CardFooter>
        <CardTitle className="text-muted">${userTotalIncome4Month}</CardTitle>
        <CardFooter>Income Left for {thisMonth}</CardFooter>
        <CardTitle className="text-muted">${dollarsLeft4Month}</CardTitle>
        <CardFooter>Days Left In {thisMonth}</CardFooter>
        <CardText className="text-muted">{daysLeftThisMonth} Days Left</CardText>
        <CardFooter>Dollars Left To Spend Per Day</CardFooter>
        <CardText className="text-muted">${dollarsLeftPerDay} to Spend Per Day</CardText>
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
export default DebitPage;
// ONCE more than one month has been submitted, allow for averages to be made with all of them