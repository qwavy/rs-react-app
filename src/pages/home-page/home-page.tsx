import React from 'react';
import { Header } from '../../widgets/header';
import { Content } from '../../widgets/content';
import './home-page.css';

export class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Header />
        <Content />
      </div>
    );
  }
}
