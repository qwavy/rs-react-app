import React from 'react';
import { Card } from '../card/card';
import './card-list.css';
import type { Planet } from '../../../shared/types';

interface Props {
  planets: Planet[];
  isLoading: boolean;
}

export class CardList extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div className="card-list">
        {this.props.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          this.props.planets.map((planet) => (
            <Card key={planet.uid} data={planet} />
          ))
        )}
      </div>
    );
  }
}
