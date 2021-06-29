import React from "react";
import "./style.css"
import "bootstrap/dist/css/bootstrap.css";
import image from "../images/HBG.jpeg";
import AllHotels from "./homey";
export class Home extends React.Component {
    render()
    {
        return(
        <React.Fragment>         
        <div className="Content" style={{textAlign:"center"}}>
        <img className="img-fluid" src={image}/>
        <h1>Welcome to the Home Page</h1>
        <br/>
        </div>
        <AllHotels/>
        </React.Fragment>
        );
    }
}