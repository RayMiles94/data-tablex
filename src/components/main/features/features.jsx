import React, { Component } from "react";
import './features.css';

export default class Features extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'Features'
        };
    }

    render() {
        document.title = this.state.name;
        return (
            <div className="container">
                <div style={{ alignContent:'center' }}>{this.state.name}</div>
                <table className="table table-sm">
                    <tr style={{ backgroundColor:'lightblue' }}>
                        <td>id</td>
                        <td>value</td>
                    </tr>
                    {this.props.features.map(
                        tr => {
                            return (
                                <tr>
                                    <td>{tr.id}</td>
                                    <td>{tr.value}</td>
                                </tr>
                            )
                        }
                    )}
                </table>
            </div>
        );
    }

}