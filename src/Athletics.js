import React from 'react';
import './styles.css';
import './Athletics.css';
import chess from './images/ChessBoxing.jpg';
import ostrich from './images/Ostrichracing.jpeg';
import football from './images/football.webp';

function Athletics() {
  return (
    <div className="container">
      <header>
        <h1>Athletics</h1>
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
        <h2>Our Sports Teams</h2>
      </header>

      <section>
        <div className="sport">
          <img src={chess} alt="Chess Boxing" />
          <h3>Chess Boxing</h3>
          <p>If someone is smarter than you, just try to knock em out in the next round.</p>
        </div>

        <div className="sport">
          <img src={football} alt="Football" />
          <h3>Football</h3>
          <p>What kind of American school would we be without football?</p>
        </div>


        <div className="sport">
          <img src={ostrich} alt="Ostrich Racing" />
          <h3>Ostrich Racing</h3>
          <p>Exactly as it sounds; you hop on an ostrich and race.</p>
        </div>

      </section>

      <footer>
        <p>&copy; 2024 Hillcrest Valley Vipers</p>
      </footer>
    </div>
  );
}

export default Athletics;
