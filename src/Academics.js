import React from 'react';
import './Academics.css';
import img1 from './images/chinchilla.jpeg';
import img2 from './images/pepe.jpeg';
import img3 from './images/origami.jpeg';
import img4 from './images/hylian.jpeg';
import img5 from './images/paint.jpeg';
import img6 from './images/cyber.webp';

function Academics() {
  return (
    <div className="container">
      <header>
        <h1>Hillcrest Valley Vipers</h1>
      </header>

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

      <section>
        <h2>Classes Offered</h2>
        <div className="classes">
          <div className="class-item">
            <img src={img1} alt="chinchilla" />
            <h3>Taking Care of A Chinchilla</h3>
            <p>Learn how to take care of a Chinchilla. From feeding it to petting it and cleaning up it's poop.</p>
          </div>
          <div className="class-item">
            <img src={img2} alt="History of Meme Culture" />
            <h3>History of Meme Culture</h3>
            <p>Dive deep into the world of internet memes.</p>
          </div>
          <div className="class-item">
            <img src={img3} alt="Extreme Origami" />
            <h3>Extreme Origami</h3>
            <p>Make intricate paper designs that defy gravity.</p>
          </div>
          <div className="class-item">
            <img src={img4} alt="Hylian Language" />
            <h3>Hylian Language</h3>
            <p>Learn the language of the Hylian people. This will also make it really easy to read the direction signs in Tears Of The Kingdom.</p>
          </div>
          <div className="class-item">
            <img src={img5} alt="Watch Paint Dry" />
            <h3>Watch Paint Dry</h3>
            <p>We literally do nothing except watch newly painted walls dry on campus.</p>
          </div>
          <div className="class-item">
            <img src={img6} alt="Cybersecurity" />
            <h3>Cybersecurity</h3>
            <p>I heard the Cyber Defense Organization over at UAlbany is really good at teaching this.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Hillcrest Valley Vipers</p>
      </footer>
    </div>
  );
}

export default Academics;
