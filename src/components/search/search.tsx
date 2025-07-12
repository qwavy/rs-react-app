import React from 'react';

export class Search extends React.Component {
  constructor() {
    super();
    this.state = { searchValue: '' };
  }

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(this.state.searchValue);
    localStorage.setItem('searchValue', this.state.searchValue);
    fetch(
      `https://www.swapi.tech/api/planets/?name=${localStorage.getItem('searchValue')}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  render(): React.ReactNode {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.searchValue} onChange={this.handleChange} />
        <button>search</button>
      </form>
    );
  }
}
