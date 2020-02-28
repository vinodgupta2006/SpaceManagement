import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from '../../../components/input/input';
import Button from '../../../components/button/button';

const seatAlocationUserInfoView = (props)=>{
    const { onSeatAllocation } = props;

    return <Row className="seat">
        <Col>
            <Row>
                <Col className="seat__title">
                    Seat Allocation
                </Col>
            </Row>
            <Row>
                <Col xs={1} className="seat__labeltext">Emp ID</Col>
                <Col xs={4}>
                    <Input type="text" className="seat__input" />
                </Col>
                <Col xs={1} />
                <Col xs={1} className="seat__labeltext">Name</Col>
                <Col xs={4}>
                    <Input type="text" className="seat__input" />
                </Col>
            </Row>

            <Row>
                <Col xs={1} className="seat__labeltext">Country</Col>
                <Col xs={4}>
                    <Input type="text" className="seat__input" />
                </Col>
                <Col xs={1} />
                <Col xs={1} className="seat__labeltext">City</Col>
                <Col xs={4}>
                    <Input type="text" className="seat__input" />
                </Col>
            </Row>

            <Row>
                <Col xs={1} className="seat__labeltext">Project Name</Col>
                <Col xs={4}>
                    <Input type="text" className="seat__input" />
                </Col>
                <Col xs={1} />
                <Col xs={1} className="seat__labeltext"> Project Room </Col>
                <Col xs={4}>
                    <Input type="text" className="seat__input" />
                </Col>
            </Row>

            <Row align="right" className="seat__btnrow">
                <Col xs={11}>
                    <Button name="Let Me Allocate Seat" className="seat__btn" onClick={onSeatAllocation} />
                </Col>
            </Row>
        </Col>
    </Row>
}

export default seatAlocationUserInfoView;