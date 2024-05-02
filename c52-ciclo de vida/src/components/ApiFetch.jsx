import { Component } from "react";
import Card from "./Card";

export default class ApiFetch extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => this.setState({ characters: data.results }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <h5>Rick & Morthy app</h5>
        <div>
          {this.state.characters.map((character) => {
            return <Card key={character.id} character={character} />;
          })}
        </div>
      </div>
    );
  }
}
