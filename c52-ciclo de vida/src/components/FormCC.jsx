import { Component } from "react";

export default class FormCC extends Component {
  constructor() {
    super();
    this.state = {
      nombre: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Nombre:
          <input type="text" name="nombre" />
        </label>
        <button>Enviar Info</button>
      </form>
    );
  }
}
