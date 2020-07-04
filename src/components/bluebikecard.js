import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function BlueBikeCard(props) {
    const [bikesAvailable, setBikesAvailable] = useState(0);
    const [bikesInUse, setBikesInUse] = useState(0);
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
                const bikeSlotsEmpty = stallCapacity - bikesInUse - bikesAvailable;

                setBikesAvailable(bikesAvailable);
                setBikesInUse(bikesInUse);
                setBikeSlotsEmpty(bikeSlotsEmpty);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    var bikeIcons = [];

    for (var i = 0; i < bikesAvailable; i++) {
        bikeIcons.push(<img className="icon-bike" src={require('../images/bike-available.png')} />);
    }

    for (var i = 0; i < bikesInUse; i++) {
        bikeIcons.push(<img className="icon-bike" src={require('../images/bike-inuse.png')} />);
    }

    for (var i = 0; i < bikeSlotsEmpty; i++) {
        bikeIcons.push(<img className="icon-bike" src={require('../images/bike-slot.png')} />);
    }

    return (
        <div className="card">
            <h3>{name}</h3>
            Currently available: {bikesAvailable} <br />
            Currently in use: {bikesInUse} <br />
            Free stall places: {bikeSlotsEmpty}

            <div className="icons-container">
                {bikeIcons}
            </div>
        </div>
    )
}