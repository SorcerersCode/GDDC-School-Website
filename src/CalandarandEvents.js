import React from 'react';
import './CalendarandEvents.css';

function CalendarandEvents() {
  return (
    <div className="container">
      <header>
        <h1>Calendar and Events</h1>
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
        <h2>Upcoming Events</h2>
        <div className="events">
          <div className="event-item">
            <h3>Snake Venom Milking</h3>
            <p>Date: April 12, 2024</p>
          </div>
          <div className="event-item">
            <h3>"Can't End On A Loss" Video Game Night</h3>
            <p>Date: April 20, 2024</p>
          </div>
          <div className="event-item">
            <h3>Bill Nye Science Show</h3>
            <p>Date: May 3, 2024</p>
          </div>
          <div className="event-item">
            <h3>Cafeteria Food Fight</h3>
            <p>Date: May 17, 2024</p>
          </div>
          <div className="event-item">
            <h3>Cocomelon Brain Rot Movie Night</h3>
            <p>Date: May 31, 2024</p>
          </div>
          <div className="event-item">
            <h3>Graduation Ceremony</h3>
            <p>Date: June 15, 2024</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Hillcrest Valley Vipers</p>
      </footer>
    </div>
  );
}

export default CalendarandEvents;
