/* eslint-disable react/prop-types */
import { Component } from "react";

export default class StatefullCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: this.props.nombre,
      edad: this.props.edad,
      apellido: this.props.apellido,
    };
  }

  render() {
    // console.log(this);
    return (
      <div>
        Hola {this.state.nombre} {this.state.apellido}, tu edad es{" "}
        {this.state.edad}
      </div>
    );
  }
}
