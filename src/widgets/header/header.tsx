import React from 'react';
import { Search } from '../../components/search';

interface Props {
  searchValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export class Header extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <div>
        <Search
          searchValue={this.props.searchValue}
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
        />
      </div>
    );
  }
}
