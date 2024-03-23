import React from 'react';
import './HomePage.css';
import img1 from './images/valley.png';
import img2 from "./images/logo.png"

function HomePage() {
  return (
    <div className="container">
      <header>
        <img src={img2} className="landscapeimg" alt="School's Logo/Mascot" />
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
        <img src={img1} alt="Valley where the school resides in" />
        <h2>Welcome to Hillcrest Valley Vipers!</h2>
        <br></br>
        <p>We're dedicated to fostering a supportive learning environment where every student can thrive. Explore our website to learn more about our academics, athletics, and community. Go Vipers!</p>
        <br></br>
        <div className="news">
          <h2>News & Announcements</h2>
          <div className="news-item">
            <h3>Cyber Defense Competition happening in Albany New York</h3>
            <p>If you are interested in signing up, it's too late. The attack began by the time you are reading this.</p>
          </div>
          <div className="news-item">
            <h3>Local group of students call themselves the "Breakfast Club"</h3>
            <p>Sources tell us that after spending an unexpected amount of time in a school library, these students formed unlikely but lifelong friendships. Rumor has it, they even penned a collective essay about their experience.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Upcoming Events</h2>
        <div className="events">
          <div className="event-item">
            <h3>Dodgeball Tournament</h3>
            <p>Date: April 10, 2024</p>
          </div>
          <div className="event-item">
            <h3>Parking Lot Derby</h3>
            <p>Date: April 21, 2024</p>
          </div>
          <div className="event-item">
            <h3>Pajama Day</h3>
            <p>Date: May 5, 2024</p>
          </div>
          <div className="event-item">
            <h3>Teacher Talent Show</h3>
            <p>Date: May 15, 2024</p>
          </div>
          <div className="event-item">
            <h3>Alien Invasion Drill</h3>
            <p>Date: May 25, 2024</p>
          </div>
          <div className="event-item">
            <h3>Crazy Hat Day</h3>
            <p>Date: June 1, 2024</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Hillcrest Valley Vipers</p>
      </footer>
    </div>
  );
}

export default HomePage;
