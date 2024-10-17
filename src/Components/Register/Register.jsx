import { useContext, useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container, Toast } from 'react-bootstrap';
import './Register.css';
import { context } from '../../Context'; // Import context
import { useNavigate } from 'react-router';

function Register() {
  const [validated, setValidated] = useState(false);

  const [hotelName, setHotelName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState(''); 

  const { hotels, setHotels } = useContext(context);
  
  const [show, setShow] = useState(false)


  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

    } else {
      event.preventDefault(); 

      const newHotel = {
        hotelName,
        contactNumber,
        city,
        state,
        zip,
      };


      setHotels((prevHotels) => [...prevHotels, newHotel]);

      console.log(hotels);


      setValidated(true);

      setShow(true);

      navigate('/hotels')

    

      

      
    }
  };

  return (
    <Container className='body'>
      <h1>Register Your Hotel Here</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Hotel Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Hotel Name"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)} 
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Address Of Your Hotel"
              value={city}
              onChange={(e) => setCity(e.target.value)} 
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)} 
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)} 
            />
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
        <Button type="submit" >Submit form</Button>
      </Form>


    {/* Toaster */}

    <Toast show={show}>

      <Toast.Body>Hotel Added Successfully</Toast.Body>
    </Toast>



    </Container>
  );
}

export default Register;
