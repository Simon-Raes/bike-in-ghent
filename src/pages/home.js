import React from 'react';
import './styles/home.css';

import { Header } from '../components/header.js'
import { BlueBikeCard } from '../components/bluebikecard.js'


export default function Home() {
    return (
        <div>
            <Header />
            <div className="content">
                <BlueBikeCard dataset="blue-bike-deelfietsen-gent-sint-pieters-m-hendrikaplein" />
                <BlueBikeCard dataset="blue-bike-deelfietsen-gent-sint-pieters-st-denijslaan" />
                <BlueBikeCard dataset="blue-bike-deelfietsen-gent-dampoort" />
            </div>
        </div>
    )
}