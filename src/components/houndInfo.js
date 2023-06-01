import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./houndInfo.css";

export default class HoundInfo extends Component {
  render() {
    let { hound } = this.props;
    return (
      <div className="container">
        <div className="cute-hound row justify-content-center mt-5">
          <div className="col-11 col-lg-5">
            <div className="hound-info-card card">
              <img
                className="card-img-top mt-2 mx-auto"
                src={hound.src}
                alt={hound.name}
              />
              <div className="card-body">
                <h2 className="card-title text-center">{hound.name}</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Breed:</strong> {hound.about}
                  </li>
                </ul>
                <p>
                  Contact us at (123) 456-7890 for information on adopting this
                  hound!
                </p>
                <div className="card-body">
                  <Link to="/dogs" className="btn btn-info text-light">
                    Back to Adoptable Dogs
                  </Link>
                  <br></br>
                  <Link to="/" className="btn btn-info text-light">
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
