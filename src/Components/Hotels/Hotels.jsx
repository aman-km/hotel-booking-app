import React, { useContext } from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { context } from '../../Context';
import { Link } from 'react-router-dom';
import './Hotels.css';

function Hotels() {
    const { hotels, setSelectedHotel } = useContext(context);

    const handleBookNow = (hotel) => {
        setSelectedHotel(hotel);  // Set the selected hotel when "Book Now" is clicked
    };

    return (
        <Container className='mt-4'>
            <h1 className='title'>Hotels Available To Book</h1>
            <Row>
                {hotels.map((hotel, index) => (
                    <Card style={{ width: '18rem', marginLeft: '10px', marginTop:'10px' }} key={index}>
                        <Card.Img variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/d3/02/gateway-calicut-facade.jpg?w=1200&h=-1&s=1" style={{ borderRadius: '10px' }} />
                        <Card.Body>
                            <Card.Title>{hotel.hotelName}</Card.Title>
                            <Card.Text>
                                <b>Address: </b>{hotel.city}, {hotel.state}, {hotel.zip}
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleBookNow(hotel)} as={Link} to={'/Booking'}>Book Now</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </Container>
    );
}

export default Hotels;
