import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Billing(props) {
    const [lgShow, setLgShow] = useState(false);

    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Checkout
            </Button>

            <Modal size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title>Proceeding to Checkout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="row">
                            <div className="col-md-5">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="eg:- Vinay" />
                                </Form.Group>
                            </div>
                            <div className="offset-1 col-md-5">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="eg:- Sharma" />
                                </Form.Group>
                            </div>
                        </div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="number" placeholder="778XXXX990" />
                        </Form.Group>
                        <div class="row">
                            <div className="col-md-5">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Check In Date</Form.Label>
                                <Form.Control type="date" placeholder="name@example.com" />
                                </Form.Group>
                            </div>
                            <div className="offset-1 col-md-5">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Check Out Date</Form.Label>
                                <Form.Control type="date" placeholder="name@example.com" />
                                </Form.Group>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        CANCEL
                    </Button>
                    <a href="/user/payment">
                    <Button variant="success" to="google.com" component={Link} onClick={handleClose}>
                        CONFIRM
                    </Button>
                    </a>
                    {/* Ye Just OOPER WAALE BUTTON ME WO LINK WALA DAAL DENA */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Billing;