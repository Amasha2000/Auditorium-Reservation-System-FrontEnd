import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css';
import Seat from '../Img/seating-plan.png';
import Table from '../Img/booking-fees-table.png';
import Footer from '../Img/footer.png';
import BackgroundImg from '../Img/banner.png';
import bellIcon from '../Img/bell-icon.png'; 
import userIcon from '../Img/user-icon.png';
import Logo from '../Img/logo.png';
import '../style/seating.css';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Navbar variant="dark" expand="md" className="custom-navbar px-3">
            <Navbar.Brand href="#home" className="d-flex align-items-center">
                <img src={Logo} alt="Logo" className="navbar-logo" />  
                <span className="navbar-text ms-2">Welcome!</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                <Link to="/" className="navbar-text ms-2">Home</Link> 
                    <Nav.Link href="#notifications" className="nav-icon">
                        <img src={bellIcon} alt="Bell Icon" className="icon" />
                    </Nav.Link>
                    <Nav.Link href="#profile" className="nav-icon">
                        <img src={userIcon} alt="User Icon" className="icon" />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

            <div className="bg-image-section" style={{ backgroundImage: `url(${BackgroundImg})` }}>
                <div className="availability text-center">
                    <div className="availability-box">
                        <button className="btn btn-danger px-5 py-3">Check Availability</button>
                    </div>
                </div>
            </div>

            <div className="content container mt-5">
                <div className="table-section text-center mb-5">
                    <div className="contentheader">
                        <h5>Description of Ruhuna University Rabindranath Tagore Memorial Auditorium Booking Fees</h5>
                    </div>
                    <img src={Table} alt="Booking Fees Table" className="img-fluid" />
                </div>
                <div className="security-charges-box text-start mb-5">
                    <p>
                        If it is expected to be done under the security wing of the university, 
                        60 security personnel will be employed for the handling of personnel and the security of the premises.
                    </p>
                    <p class="fw-bold">
                        Charges per hour - 250.00 X 60 = Rs. 15,000.00
                    </p>
                    <p>
                        (These security personnel shall be on security duty in the auditorium premises from 2 hours before the scheduled start time of the concert 
                        and up to one hour after the concert ends)
                    </p>
                </div>
                <div className="seating-plan text-center mb-5">
                    <img src={Seat} alt="Seating Plan" className="img-fluid" />
                </div>
                <div className="table-section text-center">
                    <img src={Footer} alt="Booking Fees Table" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default App;
