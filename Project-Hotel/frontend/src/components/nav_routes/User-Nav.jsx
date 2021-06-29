import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import {searchHotel} from "../components/search";

export default class User_Nav extends Component {
    render() {
        return (
        <React.Fragment>
        {/* <div className="logo"><img src={Logo}></img></div> */}
        <nav class="navbar sticky-top navbar-light bg-info">
        <div class="container-fluid">
        <Link to='/' className="navbar-brand m-3"><strong>OHO</strong></Link>   
        <Link to='/user/aboutPg' className="navbar-brand m-3"><strong>More info</strong></Link>    
        <Link to='/user/aboutUs' className="navbar-brand m-3"><strong>About Us</strong></Link>
        </div>
        </nav>
        </React.Fragment>
        );
    }
}