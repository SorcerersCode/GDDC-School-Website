import React from 'react';
import './styles.css';
import './ContactUs.css';
import brown from './images/MrBrown.png'
import sim from './images/MsSimian.png'
import nurse from './images/nurse.png'
import small from './images/MrSmall.png'
import moon from './images/moonchild.png'
import rocky from './images/rocky.webp'

function ContactUs() {
  return (
    <div className="container">
      <header>
        <h1>Contact Us</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/AboutUs">About Us</a></li>
            <li><a href="/Calendar&Events">Calendar & Events</a></li>
            <li><a href="/Academics">Academics</a></li>
            <li><a href="/Athletics">Athletics</a></li>
            <li><a href="/ContactUs">Contact Us</a></li>
          </ul>
        </nav>

        <h2>Meet Our Team</h2>
      </header>

      <section>

        <div className="contact-person">
          <img src={brown} alt="Principal Brown" />
          <h3>Principal Brown</h3>
          <p>Title: Principal</p>
          <p>Email: sbrown@elmore.com</p>
          <p>Phone: 555-2368</p>
        </div>

        <div className="contact-person">
          <img src={sim} alt="Ms. Simian" />
          <h3>Ms.Simian</h3>
          <p>Title: Teacher</p>
          <p>Email: lsimian@elmore.com</p>
          <p>Phone: 555-2368</p>
        </div>

        <div className="contact-person">
          <img src={small} alt="Mr.Small" />
          <h3>Mr.Small</h3>
          <p>Title: Guidance Councelor</p>
          <p>Email: ssmall@elmore.com</p>
          <p>Phone: 555-2368</p>
        </div>

        <div className="contact-person">
          <img src={rocky} alt="Rocky" />
          <h3>Rocky Robinson</h3>
          <p>Title: Bus Driver / Maintenance Worker</p>
          <p>Email: rrobinson@elmore.com</p>
          <p>Phone: 555-2368</p>
        </div>

        <div className="contact-person">
          <img src={nurse} alt="Nurse" />
          <h3>Joan Markham</h3>
          <p>Title: Nurse</p>
          <p>Email: jmarkham@elmore.com</p>
          <p>Phone: 555-2368</p>
        </div>

        <div className="contact-person">
          <img src={moon} alt="Moonchild" />
          <h3>Moonchild Corneille</h3>
          <p>Title: Geography Teacher</p>
          <p>Email: mcorneille@elmore.com</p>
          <p>Phone: 555-2368</p>
        </div>

      </section>

      <footer>
        <p>&copy; 2024 Hillcrest Valley Vipers</p>
      </footer>
    </div>
  );
}

export default ContactUs;
