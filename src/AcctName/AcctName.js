import React from 'react';
import { Row, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
// import InputForm from '../InputForm/InputForm'


const AcctName = (props) => {
  return (
    <Row>
        <Col sm={{ size: 2, offset: 6 }} md={{ size: 2, offset: 8 }} lg={{ size: 2, offset: 9 }}>
            <Dropdown isOpen={props.dropdownOpen} toggle={props.toggleEmail}>
                <DropdownToggle  caret>
                    {props.userEmail}
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>Delete User Data</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>Sign Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Col>
    </Row>
  )
}
export default AcctName;