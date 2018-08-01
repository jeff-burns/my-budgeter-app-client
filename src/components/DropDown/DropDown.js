import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
// import LogIn from '../LogIn/LogIn';
// import CreateAccount from '../CreateAccount/CreateAccount'
// import DebitPage from '../DebitPage/DebitPage';
// import CreditPage from 

export default class DropDown extends React.Component {
    constructor(props) {
        super(props)
          this.state = {
            
            
          };
        }
      
        
    
    
  render() {
    return (
        <ButtonGroup>
        
        <Button color="info" onClick={this.props.toggleAccount} >
            Log In or Create Account
        </Button>
 
          
            

        <Button color="primary" onClick={this.props.toggleDebit}>Debit From Budget</Button>
        <Button color="danger" onClick={this.props.toggleCredit}>Credit To Budget</Button>
      </ButtonGroup>
    );
  }
}

// <ButtonDropdown open={this.state.logInOpen} toggleLogIn={this.toggleLogIn}>
//                   <DropdownToggle caret  color="info">
//                     Log In
//                   </DropdownToggle>
//                   <DropdownMenu>
//                   </DropdownMenu>
//                   </ButtonDropdown>