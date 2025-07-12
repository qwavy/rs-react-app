import React from 'react';
import { SearchButton, SearchInput } from '../../components/search';

export class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <SearchInput />
        <SearchButton />
      </div>
    );
  }
}
