import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import VolunteerList from "./VolunteerList";
import Home from "./Home";
import Hounds from "./Hounds";
import HoundInfo from "./houndInfo";
import "./Hounds.css";

export default class Routes extends Component {
  render() {
    const getHound = (props) => {
      let name = props.match.params.name;
      let currentHound = this.props.dogs.find(
        //toLowerCase allows for the URL to have caps
        (hound) => hound.name.toLowerCase() === name.toLowerCase()
      );
      return <HoundInfo {...props} hound={currentHound} />;
    };
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/dogs"
          render={() => <Hounds dogs={this.props.dogs} />}
        />
        <Route exact path="/dogs/:name" render={getHound} />
        <Route
          exact
          path="/volunteer"
          render={() => <VolunteerList volunteers={this.props.volunteers} />}
        />
      </Switch>
    );
  }
}
