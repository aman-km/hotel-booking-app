import React from 'react';
import './Booking.css';
import { Container, Card } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useContext } from 'react';
import { context } from '../../Context';
import { useNavigate } from 'react-router';

function Booking() {
    const { selectedHotel, setSelectedHotel } = useContext(context);
    const [validated, setValidated] = useState(false);
    const [submitted, setSubmitted] = useState(false); 
    const navigate = useNavigate();

    const handleCancel = () => {
        alert("You cancelled");
        setSelectedHotel(null);
        navigate('/hotels');
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            setSubmitted(true);
        }
        setValidated(true);
    };

    return (
        <Container>
            <h1 className='title'>Complete Your Booking</h1>

            {submitted ? (

                // Confirmation screen after successful submission
                <Card>
                    <Card.Header>Booking Confirmation</Card.Header>
                    <Card.Body>
                        <Card.Title>Thank you for your booking!</Card.Title>
                        <Card.Text>
                            <b>Hotel Name:</b> {selectedHotel ? selectedHotel.hotelName : 'N/A'} <br />
                            <b>Address:</b> {selectedHotel ? `${selectedHotel.city}, ${selectedHotel.state}, ${selectedHotel.zip}` : 'N/A'} <br />
                            <b>Check-in Date:</b> {new Date().toLocaleDateString()} <br />
                            <b>Check-out Date:</b> {new Date().toLocaleDateString()} <br />
                            <b>Number of People:</b> 1 <br />
                            <b>Number of Rooms:</b> 1 <br />
                        </Card.Text>
                        <Button variant="success" onClick={() => navigate('/hotels')}>Back to Hotels</Button>
                    </Card.Body>
                </Card>
            ) : (
                <>
                    {selectedHotel && (
                        <Card>
                            <Card.Header>Featured</Card.Header>
                            <Card.Body>
                                <Card.Title>{selectedHotel.hotelName}</Card.Title>
                                <Card.Text>
                                    <b>Address: </b>{selectedHotel.city}, {selectedHotel.state}, {selectedHotel.zip}
                                </Card.Text>
                                <Button variant="danger" onClick={handleCancel}>Cancel Booking</Button>
                            </Card.Body>
                        </Card>
                    )}

                    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ marginTop: '30px', paddingBottom: '50px' }}>
                        {/* Date Selection Section */}
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom06">
                                <Form.Label className='label'>Check-in Date</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid check-in date.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom07">
                                <Form.Label className='label'>Check-out Date</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid check-out date.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        {/* Number of People and Rooms Section */}
                        <Row className="mb-3" style={{ marginTop: '20px' }}>
                            <Form.Group as={Col} md="6" controlId="validationCustom08">
                                <Form.Label className='label'>Number of People</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Number of people"
                                    min="1"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid number of people.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="validationCustom09">
                                <Form.Label className='label'>Number of Rooms</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Number of rooms"
                                    min="1"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid number of rooms.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label className='label'>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustom02" style={{ marginTop: '20px' }}>
                                <Form.Label className='label'>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3" style={{ marginTop: '20px' }}>
                            <h4>Your Address</h4>
                            <Form.Group as={Col} md="8" controlId="validationCustom03">
                                <Form.Label className='label'>City</Form.Label>
                                <Form.Control type="text" placeholder="City" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="8" controlId="validationCustom04" style={{ marginTop: '20px' }}>
                                <Form.Label className='label'>State</Form.Label>
                                <Form.Control type="text" placeholder="State" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="8" controlId="validationCustom05" style={{ marginTop: '20px' }}>
                                <Form.Label className='label'>Zip</Form.Label>
                                <Form.Control type="number" placeholder="Zip" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid zip.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button type="submit" variant='warning'>Pay Now</Button>
                    </Form>
                </>
            )}
        </Container>
    );
}

export default Booking;
