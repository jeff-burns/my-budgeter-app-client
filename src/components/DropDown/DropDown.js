import React from "react";
import { Button, ButtonGroup } from "reactstrap";
// import LogIn from '../LogIn/LogIn';
// import CreateAccount from '../CreateAccount/CreateAccount'
// import DebitPage from '../DebitPage/DebitPage';
// import CreditPage from

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ButtonGroup>
        <div className="row">
          <Button
            className="col-sm"
            color="info"
            onClick={this.props.toggleAccount}
          >
            Log In or Create Account
          </Button>
          <Button
            className="col-sm"
            color="danger"
            onClick={this.props.toggleDebit}
            active
          >
            Debit From Budget
          </Button>
          <Button
            className="col-sm"
            color="success"
            onClick={this.props.toggleCredit}
            active
          >
            Credit To Budget
          </Button>
        </div>
      </ButtonGroup>
    );
  }
}
