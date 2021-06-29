// import React, { useState, useContext } from "react";
// import avtr from '../images/avatar.png';
import logo from '../images/oho.jpeg';
import './About.css';
import Service from './AboutService';
function About() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="hotelName">OHO Hotels</h1>
                    <p className="lead intro">We belive in serving our best to our users by providing one of
                        the best Hotel services across the globe. We had one billions
                        hearts by our service, and will always be doing the same in the
                        coming future. Our partners totally respects your privacy, and try to 
                        provide the safe and healthy environment for you. Your happiness and satisfaction is the
                        motivation that help us serve you better.
                    </p>
                </div>
                <div className="col-md-5">
                    <img src={logo} className="img-fluid mx-auto d-block" style={{ width: "80%" }} />
                </div>
            </div>
            <hr />
            <Service />
            <hr />
        </div>
    );
}

export default About;
