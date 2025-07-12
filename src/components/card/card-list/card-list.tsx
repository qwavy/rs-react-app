import React from 'react';
import { Card } from '../card/card';
import './card-list.css';

export class CardList extends React.Component {
  constructor() {
    super();
    this.state = { planets: [] };
  }

  componentDidMount(): void {
    fetch(`https://www.swapi.tech/api/planets`)
      .then((res) => res.json())
      .then((data) => this.setState({ planets: data.results }))
      .catch((err) => console.error(err));
  }

  render(): React.ReactNode {
    return (
      <div className="card-list">
        {this.state.planets.map((planet) => (
          <Card key={planet.uid} data={planet} />
        ))}
      </div>
    );
  }
}
