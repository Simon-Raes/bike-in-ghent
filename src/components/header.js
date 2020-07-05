import React from 'react';

import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <div className="header">
            <div className="headercontent">
                <NavLink exact to="/" className="headeritem" activeClassName="headeritemactive">
                    BlueBikes
                </NavLink>
                <NavLink to="/parking" className="headeritem" activeClassName="headeritemactive">
                    Parkings
                </NavLink>
            </div>
        </div>
    )
}