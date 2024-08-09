import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS if not already included
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p className="mb-0">
              Staff Coordinator
              <br />
              Dr. Anandhanmurugan - 9486153102
              <br />
              Mr. Ponselvakumar - 9942074214
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
