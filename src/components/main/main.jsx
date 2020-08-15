import React, { Component } from 'react';
import './main.css';

export default class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        document.title='TableX charts | Home';
        return(
            <div id="main">{ this.props.message }</div>
        );
    }

}
