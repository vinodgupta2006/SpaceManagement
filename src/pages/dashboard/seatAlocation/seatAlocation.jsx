import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../../components/button/button';
import SeatIcon from '../../../assets/images/chair.svg';
import SystemIcom from '../../../assets/images/system_icon.svg';
import WaveIcon from '../../../assets/images/wave_square_icon.svg';

const seatAlocationView = (props)=>{
    const { onSeatSelection } = props
    const title = "Name: Vinod Kumar Emp id: XI1200 Seat No: T12";
    let seatIconFront = [];
    let seatIconBack = [];
    let imageComponentFront;
    let imageComponentBack;
    // const imageComponentFront = <Col xs={1}><img className="seat__rotatechair" src={SeatIcon} onClick={onSeatSelection} /></Col>
    // const imageComponentBack = <Col xs={1}><img src={SeatIcon} onClick={onSeatSelection} /></Col>
    for( let i=0; i<8; i++){
        imageComponentFront = <Col xs={1}><img className="seat__rotatechair" id={i+1} src={SeatIcon} title={title} onClick={()=> onSeatSelection(i+1)} /></Col>
        imageComponentBack = <Col xs={1} title={title}><img src={SeatIcon} id={i+9} onClick={()=> onSeatSelection(i+9)} /></Col>
        seatIconFront.push(imageComponentFront);
        seatIconBack.push(imageComponentBack);
    }

    return <Row className="seat">
        <Col>
            <Row>
                <Col className="seat__title">
                    Seat Allocation
                </Col>
            </Row>
            <div className="seat__seatrow">
                <Row>
                    <Col xs={2}><img src={SystemIcom} className="seat__system" /></Col>
                    {seatIconFront}
                    <Col xs={2} />

                    <Col xs={2} />
                    <Col xs={8}><hr className="seat__hr" /></Col>
                    <Col xs={2} />

                    <Col xs={2} />
                    {seatIconBack}
                </Row>

                <Row className="seat__textrow">
                    <Col xs={1}><img src={WaveIcon} /></Col>
                    <Col sx={10} className="seat__title seat__title--text">Unimoni Project</Col>
                    <Col xs={1}><img src={WaveIcon} /></Col>
                </Row>

                <Row>
                    <Col xs={2}><img src={SystemIcom} className="seat__system" /></Col>
                    {seatIconFront}
                    <Col xs={2} />

                    <Col xs={2} />
                    <Col xs={8}><hr className="seat__hr" /></Col>
                    <Col xs={2} />

                    <Col xs={2} />
                    {seatIconBack}
                </Row>
            </div>

            <Row align="right" className="seat__btnrow--btnallocation">
                <Col xs={11}>
                    <Button name="Done" className="seat__btn" />
                </Col>
            </Row>
        </Col>
    </Row>
}

export default seatAlocationView;