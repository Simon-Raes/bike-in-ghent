import React, { useState, useEffect } from 'react';
import './styles/home.css';

import { Header } from '../components/header.js'
import { BlueBikeCard } from '../components/bluebikecard.js'
import formatUnixToTimestamp from '../utils/date.js';
import AutoRefreshCheckBox from '../components/autorefreshcheckbox';

const AUTO_UPDATE_INTERVAL_MILLIS = 5 * 1000;

export default function Home() {
    const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(false);
    const [lastUpdateUnix, setLastUpdateUnix] = useState(new Date().getTime());

    useEffect(() => {
        if(autoRefreshEnabled) {
            const interval = setInterval(() => {
                setLastUpdateUnix(new Date().getTime());
              }, AUTO_UPDATE_INTERVAL_MILLIS);
              return () => clearInterval(interval);
        }
    }, [autoRefreshEnabled])

    return (
        <div>
            <Header />
            <div className="content">
                <AutoRefreshCheckBox
                    checked={autoRefreshEnabled}
                    onChecked={state => setAutoRefreshEnabled(state)}
                    lastUpdate={lastUpdateUnix} />
                <BlueBikeCard date={lastUpdateUnix} dataset="blue-bike-deelfietsen-gent-sint-pieters-m-hendrikaplein" />
                <BlueBikeCard date={lastUpdateUnix} dataset="blue-bike-deelfietsen-gent-sint-pieters-st-denijslaan" />
                <BlueBikeCard date={lastUpdateUnix} dataset="blue-bike-deelfietsen-gent-dampoort" />
            </div>
        </div>
    )
}