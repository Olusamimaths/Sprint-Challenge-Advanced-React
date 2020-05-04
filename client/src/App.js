import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: []
    }
    this.url = 'http://localhost:5000/api/players'
  }

  componentDidMount() {
    // fetch the data
    fetch(this.url)
      .then(res => res.json())
      .then(data => {
        this.setState((prevState, props) => ({players: data}))
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        {this.state.players.map(player => (
          <p key={player.name}>{player.name}</p>
        ))}
      </div>
    )
  }
}

export default App;
