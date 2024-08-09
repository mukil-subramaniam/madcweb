import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Home.css';
import image from "../assets/s1.jpg"; // Ensure this path is correct

const Home = () => {
  return (
    <div className="home-container">
      <p className="lead">Mobile Application Development has a big impact</p>
      <p className="lead">on our digital experiences and presents opportunities for developers of all skill levels.</p>
     
      <img src={image} alt="Mobile App Development" className="home-image" />
      
      
    </div>
  );
};

export default Home;
