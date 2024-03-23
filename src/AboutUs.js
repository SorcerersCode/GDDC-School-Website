import React from 'react';
import './styles.css';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="container">
      <header>
        <h1>About Us</h1>
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
      </header>
      <section>
        <h2>Our History</h2>
        <br></br>
        <p>For the past 50 years, Hillcrest Valley, home of the Vipers, has been a cornerstone in our community's educational and recreational landscape. Founded in 1974, our school started with a small group of passionate educators and volunteers committed to providing a nurturing environment for children to learn and grow.
          <br></br><br></br>
          Over the decades, we've expanded our curriculum to meet the evolving needs of our students, integrating innovative teaching methods and embracing technology in the classroom. Our commitment to academic excellence has been unwavering, with many of our alumni going on to pursue successful careers in various fields.
          <br></br><br></br>
          In addition to academics, we've always emphasized the importance of physical fitness and wellness. Our state-of-the-art sports facilities and comprehensive athletic programs have helped countless students develop teamwork, discipline, and a lifelong love for physical activity.
          <br></br><br></br>
          Beyond education and fitness, Hillcrest Valley has always prioritized the happiness and well-being of our students. Through a variety of extracurricular activities, community outreach initiatives, and support services, we strive to create a positive and inclusive school culture where every child feels valued and supported.
          <br></br><br></br>
          As we look towards the future, our commitment to empowering the next generation remains as strong as ever. With the continued support of our dedicated staff, involved parents, and supportive community, we are confident that Hillcrest Valley will continue to thrive and make a lasting impact on the lives of children for years to come.</p>
      </section>

      <section>
        <h2>Our Mission</h2>
        <br></br>
        <p>At Hillcrest Valley, home of the Vipers, our mission is to empower kids in our community by providing quality education, promoting physical fitness, and fostering happiness. Through dedicated programs and activities, we aim to inspire lifelong learning, encourage active lifestyles, and cultivate positive well-being among our youth.</p>
      </section>

      <footer>
        <p>&copy; 2024 Hillcrest Valley Vipers</p>
      </footer>
    </div >
  );
}

export default AboutUs;
