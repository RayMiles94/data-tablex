import React, { Component } from "react";

export default class NotFound extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container" style={{ backgroundColor: 'lightgray' }}>
                <div className="row">
                    <div className="col">
                        <h1 style={{ textAlign: 'center' }}>404 Not found</h1><br />
                        <div style={{ textAlign: 'center' }}>
                            <img src={require('./404.jpg')} alt="404" height="500" width="500" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}