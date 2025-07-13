import React from 'react';
import { Header } from '../../widgets/header';
import { Content } from '../../widgets/content';
import './home-page.css';
import { getPlanets } from '../../shared/api';

export class HomePage extends React.Component {
  state = {
    searchValue: localStorage.getItem('searchValue') ?? '',
    planets: [],
    isLoading: false,
  };

  async fetchData() {
    try {
      this.setState({ isLoading: true });
      const data = await getPlanets(this.state.searchValue);
      if (data.result) {
        this.setState({ planets: data.result });
      } else {
        this.setState({ planets: data.results });
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount(): void {
    this.fetchData();
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.target.value });
    localStorage.setItem('searchValue', e.target.value);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.fetchData();
  };

  render() {
    return (
      <div className="home-page">
        <Header
          searchValue={this.state.searchValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Content
          planets={this.state.planets}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}
