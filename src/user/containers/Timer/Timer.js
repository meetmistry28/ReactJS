import React, { Component } from "react";
import Style from "./Timer.module.css"

export default class Timer extends Component {
  //1 It is used to initialize state value or binding methods.
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
  }

  tick = () => {
    this.setState({
      time: new Date(),
    });
  };

  //3 It is callwd after mounting. It is mostly used to get data from server.
  componentDidMount = () => {
    console.log("3 componentDidMount");
    this.timerRef = setInterval(this.tick, 1000);
  };


  //4 It is called when state or props value changed.
  componentDidUpdate = (prevProps,prevState) => {
    if (this.state.time !== prevState.time) {
        console.log("4 componentDidUpdate");
    }
  }


  //5 it is used ralse ocupied resources when we move to onother component 
  componentWillUnmount = () => {
    clearInterval(this.timerRef);
  }

  //2 It is used display JSX in DOM, It is callesd when any state or are chhande.

  render() {
    return (
      <div>
        <h1 class={Style.time}>Timer</h1>

        <h3>{this.state.time.toLocaleTimeString()}</h3>
      </div>
    );
  }
}
