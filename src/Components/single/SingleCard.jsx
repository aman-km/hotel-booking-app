import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleCard() {

  

  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/d3/02/gateway-calicut-facade.jpg?w=1200&h=-1&s=1" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          <b>Address : </b> 
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;