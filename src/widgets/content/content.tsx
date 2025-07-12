import React from 'react';
import { CardList } from '../../components/card';

export class Content extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <CardList />
      </div>
    );
  }
}
