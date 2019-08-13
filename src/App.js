import React, { Component } from 'react';
import { CardList } from './component/cardList/CardList.component.jsx'
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
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={this.handleChange}
        />
        <CardList
          monsters={this.state.monsters}
        />
      </div>
    );
  }
}

export default App;
