import React     from 'react';
import formatUnixToTimestamp from '../utils/date.js';

export default function AutoRefreshCheckBox(props) {

    const text = props.checked
        ? `Automatically refreshing - last updated at ${formatUnixToTimestamp(props.lastUpdate)}`
        : "Enable auto-refresh"

    return (
        <div className="checkbox">
            <input
                type="checkbox"
                checked={props.checked}
                onChange={event => props.onChecked(event.target.checked)} /> {text}
        </div>
    );
}