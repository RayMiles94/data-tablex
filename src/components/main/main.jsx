import React, { Component } from 'react';
import './main.css';

export default class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        document.title='Home';
        return(
            <div id="main">Hello</div>
        );
    }

}