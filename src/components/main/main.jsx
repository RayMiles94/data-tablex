import React, { Component } from 'react';
import './main.css';

export default class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        document.title = 'TableX charts | Home';
        return (
            <div id="main">
                <div id="SideShowImages" className="carousel slide" data-ride="carousel" >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={require('./images/side1.jpg')} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('./images/side2.jpg')} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('./images/side4.jpg')} alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('./images/side5.jpg')} alt="Third slide" />
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
                <div className="container">
                    <div className="row">
                        <div className="card" style={{ width: '18rem' }} >
                            <img className="card-img-top" src={require('./images/cards/bi.jpg')} alt="Card1p" />
                            <div className="card-body">
                                <p className="card-text">BI.</p>
                            </div>
                        </div>
                        <div className="card" style={{ width: '18rem' }} >
                            <img className="card-img-top" src={require('./images/cards/data_integration.jpg')} alt="Card2" />
                            <div className="card-body">
                                <p className="card-text">Data integration.</p>
                            </div>
                        </div>
                        <div className="card" style={{ width: '18rem' }} >
                            <img className="card-img-top" src={require('./images/cards/database.png')} alt="Card3" />
                            <div className="card-body">
                                <p className="card-text">Database.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <form id="contact" className="form darkform">
                            <div className="form-group">
                                <label htmlFor="E-MAIL">E-MAIl</label>
                                <input type="text" id="mail" className="form-control" name="mail" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" className="form-control" name="subject" />
                            </div>
                            <div className="form-group">
                                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <input type="submit" value="Send" className="btn btn-success" />
                            <input type="button" value="close" className="btn btn-danger"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}
