import React from 'react';
import { Row, Col } from 'reactstrap';
// import InputForm from '../InputForm/InputForm'


const AcctName = (props) => {
  return (
    <Row>
        <Col sm={{ size: 2, offset: 6 }} md={{ size: 2, offset: 8 }} lg={{ size: 2, offset: 9 }}>
            <p className="text-white">{props.accountName}</p>
        </Col>
    </Row>
  )
}
export default AcctName;