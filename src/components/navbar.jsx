import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <p className="navbar-brand">
                    Counter App <span className='badge mx-2 bg-secondary rounded-pill'>{totalCounters}</span>
                </p>
            </div>
        </nav>);
}

export default NavBar;

