import React from 'react';


export function ParkingCard(props) {
    var bikesStall = [];

    for (let i = 0; i < props.bikeSlotsEmpty; i++) {
        bikesStall.push(<img key={i} alt="Available bike" className="icon-bike" src={require('../images/bike-grey.png')} />);
    }
    for (let i = 0; i < props.bikeSlotsOccupied; i++) {
        bikesStall.push(<img key={1000 + i} alt="Empty bike slot" className="icon-bike" src={require('../images/bike-red.png')} />);
    }

    const totalSlots = props.bikeSlotsEmpty + props.bikeSlotsOccupied;

    return (
        <div className="card">
            <h3>{props.name}</h3>
            {props.bikeSlotsEmpty}/{totalSlots} slots available
            <div className="icons-container">
                {bikesStall}
            </div>
        </div>
    )
}