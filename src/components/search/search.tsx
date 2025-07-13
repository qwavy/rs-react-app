import React from 'react';

interface Props {
  searchValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export class Search extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          value={this.props.searchValue}
          onChange={this.props.handleChange}
        />
        <button>search</button>
      </form>
    );
  }
}
