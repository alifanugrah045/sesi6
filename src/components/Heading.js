import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div>
      <div className="container w-50 ">
        <nav className="navbar navbar-expand-lg bg-light mt-5 rounded-2">
          <div className="container ps-4">
            <a className="navbar-brand" href="#">
              AddUserApp
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item pe-4">
                  <Link to="/AddPages" className="btn btn-primary" aria-current="page" >
                    Add Users
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Heading;
