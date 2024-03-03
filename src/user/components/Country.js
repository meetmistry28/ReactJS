import React, { Component } from "react";
import City from "./City";

// state : It Is an object that store information / date of perticular components
//   //shotcut con

export default class Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "India"
    };
  }

  changeCountry = () => {
    this.setState({
      name: "USA"
    });
  };

  render() {
    return (
      <>
        <div>Country</div>
        <h2 >My Country Name Is: {this.state.name}</h2>
        <button onClick={this.changeCountry}>Change Country</button>

      <City countryName={this.state.name}/>
        
      </>
    );
  }
}
