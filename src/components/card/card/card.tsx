import React from 'react';
import './card.css';

export class Card extends React.Component {
  componentDidMount(): void {
    console.log(this.props);
  }
  render(): React.ReactNode {
    return (
      <div className="card">
        <img
          src="https://cdn.britannica.com/25/160325-050-EB1C8FB7/image-instruments-Earth-satellite-NASA-Suomi-National-2012.jpg"
          alt="earth image"
          width={130}
        />
        {this.props.data.name}
      </div>
    );
  }
}
