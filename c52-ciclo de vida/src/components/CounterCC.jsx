import { Component } from "react";

export default class CounterCC extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    // console.log("%cHiciste click", "color:grey;");
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h4>El contador vale {this.state.count}</h4>
        <button onClick={this.handleClick}>Incrementar</button>
      </div>
    );
  }
}
