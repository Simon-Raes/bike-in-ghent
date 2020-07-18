import React, { useState, useEffect } from 'react';
import './styles/home.css';

import { Header } from '../components/header.js'
import { BlueBikeCard } from '../components/bluebikecard.js'
import formatUnixToTimestamp from '../utils/date.js';

const AUTO_UPDATE_INTERVAL_MILLIS = 10 * 1000;

export default function Home() {
    const [autoRefresh, setAutoRefresh] = useState(false);
    const [lastUpdate, setLastUpdate] = useState(new Date().getTime());

    useEffect(() => {
        if(autoRefresh) {
            const interval = setInterval(() => {
                setLastUpdate(new Date().getTime());
              }, AUTO_UPDATE_INTERVAL_MILLIS);
              return () => clearInterval(interval);
        }
    }, [autoRefresh])

    return (
        <div>
            <Header />
            <div className="content">
                <input className="checkbox" type="checkbox" checked={autoRefresh} onChange={event => setAutoRefresh(event.target.checked)} /> Refresh automatically - last updated at {formatUnixToTimestamp(lastUpdate)}
                <BlueBikeCard date={lastUpdate} dataset="blue-bike-deelfietsen-gent-sint-pieters-m-hendrikaplein" />
                <BlueBikeCard date={lastUpdate} dataset="blue-bike-deelfietsen-gent-sint-pieters-st-denijslaan" />
                <BlueBikeCard date={lastUpdate} dataset="blue-bike-deelfietsen-gent-dampoort" />
            </div>
        </div>
    )
}