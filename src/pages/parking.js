import React, { Component } from 'react';
import './styles/home.css';

import { Header } from '../components/header.js'

export default class Parking extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    Parking goes here :)
                </div>
            </div>
        )
    }
}