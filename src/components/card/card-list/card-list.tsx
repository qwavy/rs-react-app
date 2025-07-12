import React from 'react';
import { Card } from '../card/card';
import './card-list.css';
import type { Planet } from '../../../shared/types';

// Record<string, never> = {}
type Props = Record<string, never>;

interface States {
  planets: Planet[];
}

export class CardList extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
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
