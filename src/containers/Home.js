import React, { Component, Fragment } from "react";
import { withRouteData } from "react-static";
import Navbar from "../components/Navbar";

class Home extends Component {
  render() {
    const { homepage, navbar } = this.props;
    return (
      <Fragment>
        <Navbar {...navbar} />
        <div style={{ height: "200vh" }} />
      </Fragment>
    );
  }
}

export default withRouteData(Home);
