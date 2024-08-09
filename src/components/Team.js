import React from 'react';
import './Team.css'; // For custom styles if needed
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import Ponselvakumar from "../assets/Ponselvakumar.jpg";
import VANITHA from "../assets/VANITHA.jpg";

const Team = () => {
  const generateCard = (image, name, position) => {
    return (
      <div className="col-md-4 mb-4" key={name}>
        <div className="card team-card">
          <img src={image} alt={name} className="card-img-top team-card-img" />
          <div className="card-body">
            <h5 className="card-title team-card-title">{name}</h5>
            <p className="card-text team-card-position">{position}</p>
          </div>
        </div>
      </div>
    );
  };

  const teamMembers = [
    { image: Ponselvakumar, name: 'Ponselvakumar A P', position: 'CLUB Incharge' },
    { image: VANITHA, name: 'VANITHA P', position: 'CLUB Incharge' },
    // Add more team members here
  ];

  return (
    <div className="container team-container">
      <h1 className="text-center mb-5">OFFICE BARRIERS</h1>
      <div className="row">
        {teamMembers.map(member => generateCard(member.image, member.name, member.position))}
      </div>
    </div>
  );
};

export default Team;
