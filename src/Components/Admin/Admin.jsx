import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useContext } from 'react'
import { context } from '../../Context'
import { Card, Button } from 'react-bootstrap'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Admin() {


    const { hotels, setHotels } = useContext(context);
    const [HotelName, setHotelName] = useState("");
    const [HotelAddr, setHotelAddr] = useState("");
    const [HotelPh, setHotelPh] = useState(0);

    const [CurrentIndex, setCurrentIndex] = useState(0);

    const [NHotelName, setNHotelName] = useState("");




    const deletall = () => {

        setHotels([]);
    }

    function handledelete(index) {

        console.log(index);
        const nHotels = [...hotels]
        nHotels.splice(index, 1);
        setHotels(nHotels)
        setCurrentIndex(index)

    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);



    function handleEdit(index) {

        const hotel = hotels[index];

        setHotelPh(hotel.contactNumber);
        setHotelAddr(hotel.address);
        setHotelName(hotel.hotelName);
        setCurrentIndex(index);

        setShow(true);


    }

    function handleSave() {

        const updatedHotel = {
            hotelName: HotelName,
            contactNumber: HotelPh,
            address: HotelAddr
        };

        const updatedHotels = [...hotels];
        updatedHotels[CurrentIndex] = updatedHotel;

        setHotels(updatedHotels);

        setShow(false);
    }



    return (

        <Container style={{ marginTop: '30px' }}>

            <h3 style={{ textTransform: 'uppercase', fontWeight: '700', fontFamily: 'sans-serif', textAlign: 'center' }}>Update And Delete Hotels</h3>

            <Button variant='danger' onClick={() => deletall()}>Delete All</Button>

            <Row style={{ marginTop: '20px' }}>
                {hotels.map((hotel, index) => (
                    <Card style={{ width: '18rem', marginLeft: '10px', marginTop: '30px' }} key={index}>
                        <Card.Img variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/d3/02/gateway-calicut-facade.jpg?w=1200&h=-1&s=1" style={{ borderRadius: '10px' }} />
                        <Card.Body>
                            <Card.Title>{hotel.hotelName}</Card.Title>
                            <Card.Text>
                                <b>Address: </b>{hotel.address}
                            </Card.Text>
                            <Card.Text>
                                <b>Contact: </b>{hotel.contactNumber}
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleEdit(index)}>Edit</Button>
                            <Button variant='danger' className='m-2' onClick={() => handledelete(index)}>Delete</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row>



            {/* Edit Modal */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Hotel Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="hotelName">
                        <Form.Label>Hotel Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Hotel Name"
                            value={HotelName}
                            onChange={(event) => setHotelName(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="hotelPhone">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Contact Number"
                            value={HotelPh}
                            onChange={(event) => setHotelPh(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="hotelAddress">
                        <Form.Label>Hotel Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Hotel Address"
                            value={HotelAddr}
                            onChange={(event) => setHotelAddr(event.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        </Container>

    )
}

export default Admin
