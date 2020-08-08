import React, { Component } from 'react';
import './header.css';
import {
    Link
  } from "react-router-dom";

export default class Header extends Component {

    state = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav id="header_table" className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/"><img src="tablex.png" alt="tablex" height="50" width="50"/>Table X</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }


}