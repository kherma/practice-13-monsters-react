import React, { Component } from 'react';
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/search-box/search-box.component';
import './App.css';

// To dynamicly reload app you need to change app state
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) => this.setState({ monsters: response }));
  }

  render() {
    // Destructure state
    const { monsters, searchField } = this.state;

    // Filter monster cards based on searchbar value
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          // Every time state change, render mothod is runnning
          handleChange={(event) =>
            this.setState({ searchField: event.target.value })
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
