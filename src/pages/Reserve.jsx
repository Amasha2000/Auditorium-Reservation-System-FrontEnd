import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import '../App.css';
import {Navbar, Nav } from 'react-bootstrap';
import bellIcon from '../Img/bell-icon.png'; 
import userIcon from '../Img/user-icon.png';
import Logo from '../Img/logo.png';
import { Link } from 'react-router-dom';


function App()  {
  return (
    <><Navbar variant="dark" expand="md" className="custom-navbar px-3">
    <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <Link to="/" className="navbar-text ms-2">Home</Link> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
            <Nav.Link href="#notifications" className="nav-icon">
                <img src={bellIcon} alt="Bell Icon" className="icon" />
            </Nav.Link>
            <Nav.Link href="#profile" className="nav-icon">
                <img src={userIcon} alt="User Icon" className="icon" />
            </Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>
    <div className="application-form-container text-start">
      <Form>
        <h2 class="fw-bold text-center pb-5">Application Form</h2>
        {/* Organization/Person Details */}
        <h4 className="my-4">Details of the organization/person applying:</h4>
        <Row>
          <Col md={6}>
            <Form.Group controlId="organizationName">
              <Form.Label>Name of the organization</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="applicantName">
              <Form.Label>Name of applicant</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="idCardNumber">
              <Form.Label>National Identity Card Number</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="landline">
              <Form.Label>Phone numbers (Landline)</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="mobile">
              <Form.Label>Phone numbers (Mobile)</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={2} placeholder="" />
        </Form.Group>

        {/* Application Matter */}
        <h4 className="my-4">Details related to the matter of application:</h4>
        <Form.Group>
          <Row>
            <Col md={3}>
              <Form.Check type="radio" label="Conferences / Lectures" name="matterType" />
            </Col>
            <Col md={3}>
              <Form.Check type="radio" label="Stage Drama" name="matterType" />
            </Col>
            <Col md={3}>
              <Form.Check type="radio" label="Musical concerts" name="matterType" />
            </Col>
            <Col md={3}>
              <Form.Check type="radio" label="Awards / Tributes / Ceremonies" name="matterType" />
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <Form.Check type="radio" label="Other" name="matterType" />
              <Form.Control type="text" placeholder="Specify if other" className="mt-2" />
            </Col>
          </Row>
        </Form.Group>

        {/* Music Concerts Subsection */}
        <h6>Musical concerts :</h6>
        <Row>
          <Col md={6}>
            <Form.Check type="radio" label="Classical" name="concertType" />
          </Col>
          <Col md={6}>
            <Form.Check type="radio" label="Fast rhythms" name="concertType" />
          </Col>
        </Row>
        <p className="text-danger mt-2">
          There is no space for spectators to dance in the auditorium. If this is done, the security deposit amount of the relevant concert will be cancelled.
        </p>
        <Form.Group controlId="musicBand">
          <Form.Label>Music Band</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group controlId="singers">
          <Form.Label>Participating singers</Form.Label>
          <Form.Control as="textarea" rows={2} placeholder="" />
        </Form.Group>
        <Form.Group controlId="singers">
          <Form.Label class="fw-bold">Stage Drama/Conferences / Lectures/Awards / Tributes / Ceremonies :</Form.Label>
          <Form.Label>Resource persons / Program lead persons / Team / Special invitees</Form.Label>
          <Form.Control as="textarea" rows={2} placeholder="" />
        </Form.Group>

        {/* Viewers */}
        <h4 className="my-4">Viewers:</h4>
        <Row>
          <Col md={3}>
            <Form.Check type="radio" label="University students" name="viewersType" />
          </Col>
          <Col md={3}>
            <Form.Check type="radio" label="School students" name="viewersType" />
          </Col>
          <Col md={3}>
            <Form.Check type="radio" label="Institute staff" name="viewersType" />
          </Col>
          <Col md={3}>
            <Form.Check type="radio" label="Open" name="viewersType" />
          </Col>
        </Row>

        {/* Date & Time Period */}
        <h4 className="my-4">Date and Time Period:</h4>
        <Row>
          <Col md={6}>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="decorationStartTime">
              <Form.Label>From</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="decorationEndTime">
              <Form.Label>To</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="hours">
              <Form.Control as="select">
                <option>Number of Hours</option>
                <option>1 Hour</option>
                <option>2 Hours</option>
                <option>3 Hours</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="additionalHours">
              
              <Form.Control as="select">
                <option>Number of Additional Hours</option>
                <option>1 Hour</option>
                <option>2 Hours</option>
                <option>3 Hours</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {/* Time Period of Decoration / Preparation */}
        <h4 className="my-4">Time Period of Decoration / Preparation:</h4>
        <Row>
          <Col md={3}>
            <Form.Group controlId="decorationStartTime">
              <Form.Label>From</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="decorationEndTime">
              <Form.Label>To</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="decorationHours">
              <Form.Label>Number of Hours</Form.Label>
              <Form.Control as="select">
                <option>Number of Hours</option>
                <option>1 Hour</option>
                <option>2 Hours</option>
                <option>3 Hours</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {/* Time Period of the Rehearsal */}
        <h4 className="my-4">Time Period of the Rehearsal:</h4>
        <Row>
          <Col md={3}>
            <Form.Group controlId="rehearsalStartTime">
              <Form.Label>From</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="rehearsalEndTime">
              <Form.Label>To</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="rehearsalHours">
              <Form.Label>Number of Hours</Form.Label>
              <Form.Control as="select">
                <option>Number of Hours</option>
                <option>1 Hour</option>
                <option>2 Hours</option>
                <option>3 Hours</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {/* Equipment / Services */}
        <h4 className="my-4">Details regarding Outsourced Equipment / Services :</h4>
        <Form.Group controlId="stageLighting">
          <Form.Label>Stage lighting</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group controlId="soundAdmin">
          <Form.Label>Stage Sound Administration</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group controlId="electricGenerators">
          <Form.Label>Electric generators</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group controlId="stageDecorations">
          <Form.Label>Stage Decorations</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group controlId="ticketSales">
          <Form.Label>Ticket sales at the Auditorium premises</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>

        {/* Security */}
        <h4 className="my-4">Personnel handling and security of premises :</h4>
        <Row>
          <Col md={6}>
            <Form.Check type="radio" label="Externally" name="securityHandling" />
          </Col>
          <Col md={6}>
            <Form.Check type="radio" label="University security department" name="securityHandling" />
          </Col>
        </Row>

        {/* Action Buttons */}
        <Row className="mt-4">
          <Col md={6}>
            <Button variant="danger" className="w-100">Reject</Button>
          </Col>
          <Col md={6}>
            <Button variant="success" className="w-100">Send to VC</Button>
          </Col>
        </Row>
      </Form>
    </div></>
  );
};

export default App;
