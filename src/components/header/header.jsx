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
            <div>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <Link className="navbar-brand" to="/"><img src="tablex.png" alt="tablex" height="50" width="50" />Table X</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link"  to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/features" >Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashbaord">Dashbaord</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input id="search" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }


}
