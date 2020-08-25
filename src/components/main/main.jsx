import React, { Component } from 'react';
import './main.css';
import { Link } from "react-router-dom";
import $ from 'jquery';


const styles = {
    nodestyle : {
        backgroundImage: 'url(' + require('./images/tech/nodejs.png') + ')',
        backgroundRepeat: 'repeat-y'
    },
    mongostyle: {
        backgroundImage: 'url(' + require('./images/tech/mongo.png') + ')',
        backgroundRepeat: 'repeat-x'
    },
    graphimage : {
        backgroundImage: 'url(' + require('./images/tech/graphql.png') + ')',
        backgroundRepeat: 'repeat-y'
    }
}

export default class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        $(document).ready(function () {
            $("#card_1").fadeIn(3000);
            $("#card_2").fadeIn(5000);
            $("#card_3").fadeIn(6000);
            $("#card_4").fadeIn(7000);
            $('#SecondSection').slideDown(3000);
            $('#ThirdSection').slideDown(3500);
        });
    }

    render() {
        document.title = 'TableX charts | Home';
        return (
            <div id="main">
                <div id="SideShowImages" className="carousel slide" data-ride="carousel" >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={require('./images/side1.jpg')} alt="First slide" height="600" width="100%"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('./images/side2.jpg')} alt="Second slide" height="600" width="100%" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('./images/side4.jpg')} alt="Third slide" height="600" width="100%" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('./images/side5.jpg')} alt="Third slide" height="600" width="100%" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#SideShowImages" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#SideShowImages" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div  className="container">
                    <div id="FirstSection" className="row">
                        <div id="card_1" className="card" style={{ width: '18rem' , display:'none' }} >
                            <img className="card-img-top" src={require('./images/cards/bi.jpg')} alt="Card1p"  width="150" height="300"/>
                            <div className="card-body">
                                <p className="card-text">BI.</p>
                            </div>
                        </div>
                        <div id="card_2" className="card" style={{ width: '18rem' , display:'none'}} >
                            <img className="card-img-top" src={require('./images/cards/data_integration.jpg')} alt="Card2" width="150" height="300" />
                            <div className="card-body">
                                <p className="card-text">Data integration.</p>
                            </div>
                        </div>
                        <div id="card_3" className="card" style={{ width: '18rem' , display:'none' }} >
                            <img className="card-img-top" src={require('./images/cards/database.png')} alt="Card3" width="150" height="300" />
                            <div className="card-body">
                                <p className="card-text">Database.</p>
                            </div>
                        </div>
                        <div id="card_4" className="card" style={{ width: '18rem' , display:'none' }} >
                            <img className="card-img-top" src={require('./images/programming.jpeg')} alt="Card3" width="150" height="300" />
                            <div className="card-body">
                                <p className="card-text">Programming.</p>
                            </div>
                        </div>
                    </div>
                    <div id="SecondSection" className="row" style={{ display: 'none' }}>
                        <div className="row" >
                            <h1>Our Technology</h1>
                        </div>
                        <div  className="card card-image" style={styles.nodestyle}>
                            <div className="text-dark text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                                <div>
                                    <h5 className="pink-text"><i className="fas fa-chart-pie"></i>Javascript engine</h5>
                                    <h3 className="card-title pt-2"><strong>NodeJS</strong></h3>
                                    <p>javascript server-side.</p>
                                    <a className="btn btn-pink" href="https://nodejs.org/en/"><i className="far fa-clone left"></i> View project</a>
                                </div>
                            </div>
                        </div>
                        <div  className="card card-image" style={styles.mongostyle}>
                            <div className="text-dark text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                                <div>
                                    <h5 className="pink-text"><i className="fas fa-chart-pie"></i> Database</h5>
                                    <h3 className="card-title pt-2"><strong>JSON database</strong></h3>
                                    <p>MongoDB.</p>
                                    <Link className="btn btn-pink" to="/"><i className="far fa-clone left"></i> View project</Link>
                                </div>
                            </div>
                        </div>
                        <div  className="card card-image"  style={styles.graphimage}>
                            <div className="text-dark text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                                <div>
                                    <h5 className="pink-text"><i className="fas fa-chart-pie"></i> GraphQL</h5>
                                    <h3 className="card-title pt-2"><strong>Single end-point</strong></h3>
                                    <p>Modern API</p>
                                    <Link className="btn btn-pink" to="/"><i className="far fa-clone left"></i> View project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="ThirdSection" className="row" style={{ display: 'none' }}>
                        <div className="text-container">
                                <div className="text-content">hello</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
