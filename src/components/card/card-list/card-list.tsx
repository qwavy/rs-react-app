import React from 'react';
import { Card } from '../card/card';
import './card-list.css';
import type { Planet } from '../../../shared/types';

// Record<string, never> = {}
type Props = Record<string, never>;

interface States {
  planets: Planet[];
  isLoading: boolean;
}

export class CardList extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = { planets: [], isLoading: true };
  }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const res = await fetch(`https://www.swapi.tech/api/planets`);
      const data = await res.json();
      this.setState({ planets: data.results });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render(): React.ReactNode {
    return (
      <div className="card-list">
        <h1>{this.state.isLoading ? 'Loading...' : ''}</h1>
        {this.state.planets.map((planet) => (
          <Card key={planet.uid} data={planet} />
        ))}
      </div>
    );
  }
}
