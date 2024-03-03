import React, { Component } from "react";

export default class City extends Component {

  constructor (props) {
    super (props)

    console.log(this.props.name);
  }

  render() {
    return (
      <>
        <div>City</div>
        <div>My City Is : {this.props.countryName === 'India' ? 'Delhi' : 'LA'}</div>
        {/* <h1>My City Is Surat </h1> */}


      </>
    );
  }
}
