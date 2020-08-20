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
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Browser market shares in January, 2018'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true
                    }
                },
                series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                        name: 'Chrome',
                        y: 61.41,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Internet Explorer',
                        y: 11.84
                    }, {
                        name: 'Firefox',
                        y: 10.85
                    }, {
                        name: 'Edge',
                        y: 4.67
                    }, {
                        name: 'Safari',
                        y: 4.18
                    }, {
                        name: 'Other',
                        y: 7.05
                    }]
                }]
            },
            donut : {
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45
                    }
                },
                title: {
                    text: 'Contents of Highsoft\'s weekly fruit delivery'
                },
                subtitle: {
                    text: '3D donut in Highcharts'
                },
                plotOptions: {
                    pie: {
                        innerSize: 100,
                        depth: 45
                    }
                },
                series: [{
                    name: 'Delivered amount',
                    data: [
                        ['Bananas', 8],
                        ['Kiwi', 3],
                        ['Mixed nuts', 1],
                        ['Oranges', 6],
                        ['Apples', 8],
                        ['Pears', 4],
                        ['Clementines', 4],
                        ['Reddish (bag)', 1],
                        ['Grapes (bunch)', 1]
                    ]
                }]
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
                    <div className="col-6">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={this.state.plot}
                        />
                    </div>
                    <div className="col-6">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={this.state.donut}
                        />
                    </div>
                </div>
            </div>
        );
    }

}