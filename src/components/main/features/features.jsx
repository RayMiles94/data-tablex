import React, { Component } from "react";
import './features.css';
import _ from 'underscore';

function data() {

    return (
    <div>data</div>
    );
    
}


export default class Features extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'TableX charts | features'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div className="container">
                <h1 style={{ alignContent: 'center', color: 'green' }}>{this.state.name}</h1>
                <table className="table table-sm">
                    <thead>
                        <tr style={{ backgroundColor: 'lightblue' }}>
                            <td>id</td>
                            <td>value</td>
                        </tr>
                    </thead>
                    <tbody>
                        { _.map(this.props.features, function (tr) {
                            return (
                                <tr key={'tr_id_' + tr.id}>
                                    <td>{tr.id}</td>
                                    <td>{tr.value}</td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>

                </table>
                {data()}
            </div>
        );
    }

}
