import React from 'react';
import success from '../images/Checkmark.gif';
import { Button } from 'react-bootstrap';

export default class Payment extends React.Component
{
    render()
    {
        return(
            <div className="container" style={{textAlign:"center"}}>
            <img className="mx-auto d-block" src={success} alt="Processing..."/>
            <div className="row" style={{marginTop:"-5%"}}>
                <a href="/user">
                <Button className="btn-block btn btn-lg col-md-4" varient="info">Continue</Button></a></div>
            </div>
        )
    }
}