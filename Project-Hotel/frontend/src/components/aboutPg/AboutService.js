import React, { useState, useContext } from "react";
// import avtr from '../images/avatar.png';
import './About.css';
import him from '../images/boy.jpeg';
import her from '../images/girl.jpeg';
import they from '../images/couple.jpeg';
function Service() {

    return (
        <div className="container m-5 p-3">
            <div className="row">
                <h1 className="text-center ">QUALITY SERVICE FOR</h1>
                <div className="col-md-4">
                    <div className="card m-4" style={{ width: "20rem" }}>
                        <img src={him} class="card-img-top mt-3  mx-auto d-block" style={{ width: "100%" }} />
                        <div className="card-body">
                            <h2 className="card-title text-center p-2">FOR HIM</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card m-4" style={{ width: "20rem" }}>
                        <img src={her} class="card-img-top mt-3  mx-auto d-block" style={{ width: "103%"}} />
                        <div className="card-body">
                            <h2 className="card-title text-center p-2">FOR HER</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card m-4" style={{ width: "20rem" }}>
                        <img src={they} class="card-img-top mt-3 mx-auto d-block" style={{ width: "56%"}} />
                        <div className="card-body">
                            <h2 className="card-title text-center p-2">FOR THEY</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Service;

