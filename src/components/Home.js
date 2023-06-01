import React, { Component } from "react";
import "../App.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="jumbotron">
          <div className="container">
            <h1>Western Arkansas Hound Rescue</h1>
          </div>
        </div>
        <div className="container col-md-8 mt-2 mb-5">
          <div className="card Home">
            <div className="card-header">
              <h2>About the Western Arkansas Hound Rescue</h2>
            </div>
            <div className="card-body">
              <p className="aboutUs">
                The Western Arkansas Hound Rescue, located in Fayetteville,
                Arkansas, provides for the rescue, care, and adoption of lost,
                surrendered and homeless Hound dogs as well as providing public
                education on the breed and on responsible dog ownership. There
                are numerous opportunities for you to help the WAHR and the dogs
                that need a second chance. Please consider adopting, fostering,
                transporting, or volunteering your time. WAHR is a nonprofit,
                charitable organization and there are always dogs in need of a
                home (or foster home).
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
