import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Billing from './checkOut'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import viewer from "../images/viewer.jpeg";
function Example(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Book now!
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header>
                    <Modal.Title>{props.hotel.city}</Modal.Title>
                </Modal.Header>
                <Modal.Body  className="p-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>{props.hotel.name}</h3>
                            <em>{props.hotel.address}</em>
                            <h1 className="text-success"><em>₹ {props.hotel.price}</em></h1>
                        </div>
                        <div className="col-md-6">
                            <img src={viewer} className="mx-auto d-block" style={{  marginLeft: "-5%", width:"120%", height:"90%"}}/>
                        </div>
                    </div>
                    
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Billing/>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;