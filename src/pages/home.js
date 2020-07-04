import React, { Component } from 'react';
import './styles/home.css';
import axios from 'axios';

import { Header } from '../components/header.js'
import { BlueBikeCard } from '../components/bluebikecard.js'

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bikesAvailable: 0,
            bikesInUse: 0,
            bikeSlotsEmpty: 0,
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    <BlueBikeCard dataset="blue-bike-deelfietsen-gent-sint-pieters-m-hendrikaplein" />
                    <BlueBikeCard dataset="blue-bike-deelfietsen-gent-dampoort" />
                </div>
            </div>
        )

    }
}