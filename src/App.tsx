import React from 'react';
import { HomePage } from './pages/home-page';
import { Content } from './widgets/content';
class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
        <Content />
      </div>
    );
  }
}

export default App;
