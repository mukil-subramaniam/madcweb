import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS if not already included
import './About.css'; // Ensure this is included if you have additional custom styles

const About = () => {
  return (
    <div className="about-container">
      <div className="text-center mb-4">
        <h1 className="display-4">ABOUT OUR CLUB</h1>
      </div>
      <blockquote className="blockquote text-center">
        <p className="mb-0">“Before software can be reusable it first has to be usable.”</p>
        <footer className="blockquote-footer">- Ralph Johnson</footer>
      </blockquote>
      <p className="lead">
        The Mobile Application Development Club, driven by the creative energy of college students, is a thriving community dedicated to exploring and mastering the art of mobile app development. Our club serves as a dynamic hub where young developers, designers, and tech enthusiasts come together to embrace the dynamic realm of mobile technology. We organize workshops, hackathons, and guest lectures, providing opportunities to learn, collaborate, and innovate. With a shared passion for creating impactful applications, we bridge the gap between theory and practice. As we embark on this exciting journey, we aspire to contribute to the ever-evolving landscape of mobile technology and leave our mark on the future of digital innovation. Join us and be part of something extraordinary!
      </p>
    </div>
  );
};

export default About;
