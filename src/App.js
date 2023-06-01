import React, { Component } from "react";
import Routes from "./components/Routes";
import Navbar from "./components/Navbar";
import "./App.css";
import Sam from "./images/Sam.jpeg";
import Bernard from "./images/Bernard.jpeg";
import Rosco from "./images/Rosco.jpeg";
import Hound from "./images/Hound.jpg";

export default class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Bernard",
        src: Bernard,
        about: "Beagle/Basset Hound Mix",
      },
      {
        name: "Sam",
        src: Sam,
        about: "Basset Hound",
      },
      {
        name: "Rosco",
        src: Rosco,
        about: "Bluetick Coonhound",
      },
      {
        name: "Future Rescues",
        src: Hound,
        about: "Fosters and Adopters Always Needed",
      },
    ],
  };
  render() {
    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <div className="App">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}
