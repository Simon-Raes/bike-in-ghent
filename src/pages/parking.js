import React, { useEffect, useState } from 'react';
import './styles/home.css';

import { Header } from '../components/header.js'
import { ParkingCard } from '../components/parkingcard.js'

import axios from 'axios';

export default function Parking() {
    const [parkings, setParkings] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {

        // TODO add a loading state while this is retrieving data

        axios.get('https://data.stad.gent/api/records/1.0/search/?dataset=real-time-bezettingen-fietsenstallingen-gent&q=&facet=facilityname')
            .then(response => {
                const parkings = response.data.records.map(dat => {
                    const blob = {};
                    blob.name = dat.fields.facilityname;
                    blob.bikeSlotsEmpty = dat.fields.freeplaces;
                    blob.bikeSlotsOccupied = dat.fields.occupiedplaces;
                    return blob;
                });

                setParkings(parkings);
            })
            .catch(function (error) {
                setErrors(error)
                console.log(error);
            })
    }, [])


    return (
        <div>
            <Header />
            <div className="content">
                {parkings.map(parking =>


                    <ParkingCard key={parking.name} name={parking.name} bikeSlotsEmpty={parking.bikeSlotsEmpty} bikeSlotsOccupied={parking.bikeSlotsOccupied} />

                )}
            </div>
        </div>
    )
}