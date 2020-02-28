import React from 'react';
import DashboardView from './dashboard';
import SeatAllocationUserInfo from './seatAlocation/seatAlocationUserInfo';
import SeatAllocation from './seatAlocation/seatAlocation';


class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isSeatAllocationUserInfo: true,
            isSeatSelected: false,
            previousElementId: 0,
        }
    }

    onSeatAllocation = () =>{
        this.setState({
            isSeatAllocationUserInfo: false,
        });
    }

    onSeatSelection = (roomNo) =>{
        const { previousElementId } = this.state;
        console.log('roomNoroomNoroomNo')
        console.log(roomNo);
        if(previousElementId){
            const prevElement = document.getElementById(previousElementId);
            prevElement.classList.remove("seat__seatselection");
            this.setState({
                previousElementId: roomNo,
            });
        } else{
            this.setState({
                previousElementId: roomNo,
            });
        }
        const element = document.getElementById(roomNo);
        element.classList.add("seat__seatselection");
    }

    render(){
        const { isSeatAllocationUserInfo } = this.state;
        return (
            <div style={{overflowX: 'hidden'}}>
                <DashboardView />
                {(isSeatAllocationUserInfo) ? <SeatAllocationUserInfo
                    isSeatAllocationUserInfo={isSeatAllocationUserInfo}
                    onSeatAllocation={this.onSeatAllocation}
                /> : <SeatAllocation
                        onSeatSelection={this.onSeatSelection}
                        isSeatSelected={this.isSeatSelected}
                    />} 
            </div>
        )
    }
}

export default Dashboard;