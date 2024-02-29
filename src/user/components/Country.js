import React, { Component } from "react";

// state : It Is an object that store information / date of perticular components
//   //shotcut con

export default class Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "India",
      timeZone: "GMT+05:30",
    };
  }

  changeCountry = () => {
    this.setState({
      name: "USA",
      timeZone: "GMT-5",
    });
  };

  render() {
    return (
      <>
        <div>Country</div>
        <h1>My Country Is India</h1>
        <h2>My Country Name Is: {this.state.name}</h2>
        <h3>My Time Zone Is: {this.state.timeZone}</h3>
        <button onClick={this.changeCountry}>Change Country</button>
      </>
    );
  }
}
