import React, { Component } from 'react';
import { CardList } from './component/cardList/CardList.component.jsx'
import { SearchBox } from './component/search-box/SearchBox.component.jsx'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    const searchField = e.target.value
    this.setState({ searchField })
  }



  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeHolder="Search Monster"
          handleChange={this.handleChange}
        />
        <CardList
          monsters={filteredMonsters}
        />
      </div>
    );
  }
}

export default App;
