import React from 'react';
import './card.css';
import type { Planet, PlanetInformation } from '../../../shared/types';

interface Props {
  data: Planet | PlanetInformation;
}

export class Card extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div className="card">
        <img
          src="https://cdn.britannica.com/25/160325-050-EB1C8FB7/image-instruments-Earth-satellite-NASA-Suomi-National-2012.jpg"
          alt="earth image"
          width={130}
        />
        {'name' in this.props.data ? (
          <p>{this.props.data.name}</p>
        ) : (
          <p>{this.props.data.properties.name}</p>
        )}
      </div>
    );
  }
}
