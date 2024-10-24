import React from 'react';
import '../App.css';
import HeroImage from '../Img/hero-image.png'; // Background image path
import Event1 from '../Img/event1.png'; // Path for past event images
import Event2 from '../Img/event2.png';
import Footer from '../Img/footer.png';
import Navbar from '../Components/navbar';
import Locator from '../Img/location.png';
import About from '../Img/about.png';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Navbar/>
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="hero-text">
            <h2>UNIVERSITY OF RUHUNA</h2>
          <h1>RABINDRANATH TAGORE MEMORIAL AUDITORIUM</h1>
          <p>LARGEST AUDITORIUM IN A SRI LANKAN UNIVERSITY</p>
          <button className="btn btn-danger">Reserve Now</button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section container" id='about'>
        <h2>About</h2>
        <p class="text-start">
        The Rabindranath Tagore Memorial Auditorium in University of Ruhuna, gifted by the Government of India to Sri Lanka as a symbol of enduring friendship and the cultural heritage between the two countries, is the largest auditorium in the Southern Province as well as in any of the Universities in SriLanka. Having 1500 seating capacity and equipped with the state-of-the-art  theatre facilities, the Rabindranath Tagore Memorial Auditorium can host national and international aesthetic events, conventions,conferences as well as training programs.Situated close to beach front, it is built following the philosophy of Tropical Modernism of Geoffrey Bawa to make it closely attached to the University of Ruhuna Landscape. Since its ceremonial inauguration in October 2018, the Rabindranath Tagore Memorial Auditorium addresses the long standing needs of the University students and public of the Southern Province for having a theatre for hosting aesthetic as well as cultural and academic events.
        </p>
        <img src={About} alt="About" className="img-fluid pt-5" />
      </div>

      {/* Past Events */}
      <div className="past-events container" id="past">
            <h2>Past Events</h2>
        <div className="event-row">
        <div className="event-item">
        <img src={Event1} alt="Event 1" className="img-fluid" />
        </div>
        <div className="event-item">
      <img src={Event2} alt="Event 2" className="img-fluid" />
        </div>
        </div>
        </div>


        {/* Contact Section */}
      <div className="past-events container" id='contact'>
        <h2>Contact us</h2>      
          <div className="table-section text-center mb-5">
            <img src={Footer} alt="Contact" className="img-fluid" />       
          </div>
      </div>

      <footer className="footer">
      <img src={Locator} alt="Footer_Image" className="footer-image" />
    </footer>
    </div>
    
  );
}

export default App;
