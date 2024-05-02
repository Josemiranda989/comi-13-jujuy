/* eslint-disable react/prop-types */
import { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article key={this.props.character.id}>
        <h5>{this.props.character.name}</h5>
        <img src={this.props.character.image} alt="imageGame" />
        <p>{this.props.character.species}</p>
      </article>
    );
  }
}
