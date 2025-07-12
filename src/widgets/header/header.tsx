import React from 'react';
import { Search } from '../../components/search';

export class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Search />
      </div>
    );
  }
}
