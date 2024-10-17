import React, { useContext } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import './Home.css';
import { context } from '../../Context';
import { Link } from 'react-router-dom';

function Home() {
    const { hotels, setSelectedHotel } = useContext(context);

    const handleBookNow = (hotel) => {
        setSelectedHotel(hotel);  
    };

    return (
        <Container>
            <div className='hero'>
                <div className='hero1'>
                    <h1>Book Your Hotels Right Away</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et ullamcorper quam, in feugiat nisl. 
                    Sed ut velit ut risus facilisis tempor. Nullam ac urna tincidunt, suscipit ipsum in, euismod eros. Phasellus 
                    rutrum nisi quam, sed hendrerit neque fermentum a. Aliquam ullamcorper lorem sit amet ante dignissim sollicitudin. Mauris a bibendum massa
                    </p>
                    <Button type='primary' as={Link} to={'/hotels'}>Book Your Hotels</Button>
                </div>
                <div className="hero2">
                    <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/d3/02/gateway-calicut-facade.jpg?w=1200&h=-1&s=1' alt='hero-image' />
                </div>
            </div>

            <div className='featuredHotels'>
                <h2>Featured Hotels</h2>
                <Container className='col-md-12'>
                    <Row>
                        {hotels.slice(0, 5).map((hotel, index) => (
                            <Card style={{ width: '18rem', marginLeft: '10px' }} key={index}>
                                <Card.Img variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/d3/02/gateway-calicut-facade.jpg?w=1200&h=-1&s=1" style={{ borderRadius: '10px' }} />
                                <Card.Body>
                                    <Card.Title>{hotel.hotelName}</Card.Title>
                                    <Card.Text>
                                        <b>Address: </b>{hotel.city}, {hotel.state}, {hotel.zip}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleBookNow(hotel)}>Book Now</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </Container>
            </div>
        </Container>
    );
}

export default Home;
