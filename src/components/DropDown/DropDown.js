import React from 'react';
import { Button, ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import LogIn from '../LogIn/LogIn';
import CreateAccount from '../CreateAccount/CreateAccount'
// import DebitPage from '../DebitPage/DebitPage';
// import CreditPage from 

export default class DropDown extends React.Component {
    constructor(props) {
        super(props)
          this.toggle = this.toggle.bind(this);
          // this.toggleLogIn = this.toggleLogIn.bind(this);
          // this.toggleCreateAccount = this.toggleCreateAccount.bind(this);
          this.state = {
            dropdownOpen: false,
            logInOpen: false,
            dropdownOpen: false
          };
        }
      
        toggle() {
          this.setState({
            dropdownOpen: !this.state.dropdownOpen
          });
        }

        // toggleLogIn() {
        //   this.setState({
        //     logInOpen: !this.state.logInOpen
        //   });
        // }

        // toggleCreateAccount() {
        //   this.setState({
        //     dropdownOpen: !this.state.dropdownOpen
        //   });
        // }
    
    
  render() {
    return (
        <ButtonGroup>
        
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret  color="info">
            Log In or Create Account
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
                
              <LogIn />
                 
            </DropdownItem>

            <DropdownItem>
            
              <CreateAccount />
            
            </DropdownItem>

          </DropdownMenu>

        </ButtonDropdown>
        <Button color="primary" >Debit From Budget</Button>
        <Button color="danger" >Credit To Budget</Button>
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