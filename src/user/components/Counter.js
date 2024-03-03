import React, { Component } from 'react'

export default class Counter extends Component {
    constructor (props) {
        super (props)

        this.state = {
            count: 0
        }
    }

    countInc = () => {
        this.setState ({
            count: this.state.count + 1
        })
    }

    countDec = () => {
        this.setState ({
            count: this.state.count - 1
        })
    }

  render() {
    return (
      <>
        <h1>Counter</h1>
        <button onClick={this.countDec} disabled={this.state.count === 0 ? true : false}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.countInc} disabled={this.state.count < 5 ? false : true}>+</button>
        
      </>
    )
  }
}
