import { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => this.setState({ counter: this.state.counter + 1 });

  render() {
    return <div onClick={this.handleClick}>Counter {this.state.counter}</div>;
  }
}
