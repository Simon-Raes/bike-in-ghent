import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function BlueBikeCard(props) {
    const [bikesAvailable, setBikesAvailable] = useState(0);
    const [bikesInUse, setBikesInUse] = useState(0);
    const [bikesInMaintenance, setBikesInMaintenance] = useState(0);
    const [bikeSlotsEmpty, setBikeSlotsEmpty] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {

        // TODO add a loading state while this is retrieving data

        axios.get(`https://data.stad.gent/api/records/1.0/search/?dataset=${props.dataset}`)
            .then(response => {
                setName(response.data.records[0].fields.test);
                const bikesAvailable = response.data.records[0].fields.capacityavailable;
                const bikesInUse = response.data.records[0].fields.capacityinuse;
                const stallCapacity = response.data.records[0].fields.capacitytotal;
                const bikeSlotsEmpty = stallCapacity - bikesAvailable;
                
                setBikesAvailable(bikesAvailable);
                setBikesInUse(bikesInUse);
                setBikeSlotsEmpty(bikeSlotsEmpty);
                setBikesInMaintenance(response.data.records[0].fields.capacityinmaintenance);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [props.dataset])

    var bikesStall = [];
    var bikesUnavailable = [];

    for (let i = 0; i < bikesAvailable; i++) {
        bikesStall.push(<img key={i} alt="Available bike" className="icon-bike" src={require('../images/bike-blue.png')} />);
    }
    for (let i = 0; i < bikeSlotsEmpty; i++) {
        bikesStall.push(<img key={1000 + i} alt="Empty bike slot" className="icon-bike" src={require('../images/bike-grey.png')} />);
    }


    for (let i = 0; i < bikesInUse; i++) {
        bikesUnavailable.push(<img key={i} alt="Bike in use" className="icon-bike" src={require('../images/bike-green.png')} />);
    }
    for (let i = 0; i < bikesInMaintenance; i++) {
        bikesUnavailable.push(<img key={1000 + i} alt="Bike in maintenance" className="icon-bike" src={require('../images/bike-red.png')} />);
    }


    return (
        <div className="card">
            <h3>{name}</h3>
            This location has {bikesAvailable} bikes available and {bikeSlotsEmpty} empty storage slots
            <div className="icons-container">
                {bikesStall}
            </div>
            <br />{bikesInUse} bikes are currently in use, {bikesInMaintenance} are undergoing maintenance:
            <div className="icons-container">
                {bikesUnavailable}
            </div>
        </div>
    )
}