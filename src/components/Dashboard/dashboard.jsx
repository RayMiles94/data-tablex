import React, { Component } from "react";
import './dashboard.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


export default class DashBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chart: {
                options: {
                    title: {
                        text: 'Charts'
                    },
                    series: [{
                        data: [1, 7, 3, 4, 5]
                    }]
                }
            },
            chart2: {
                chart: {
                    renderTo: 'chart2',
                    type: 'column'
                },
                title: {
                    text: 'Fruit Consumption'
                },
                xAxis: {
                    title: {
                        text: 'Fruit Number'
                    },
                    tickInterval: 1
                },
                yAxis: {
                    title: {
                        text: 'Fruit eaten'
                    },
                    tickInterval: 1
                },
                series: [{
                    name: 'A',
                    data: [1, 0, 4]
                }, {
                    name: 'B',
                    data: [5, 7, 3]
                }]
            },
            plot: {
               
            }
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={this.state.chart.options}
                        />
                    </div>
                    <div className="col-6">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={this.state.chart2}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={this.state.plot}
                        />
                    </div>
                </div>
            </div>
        );
    }

}