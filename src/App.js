import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Tickets from './components/Tickets/Tickets'
class App extends Component {
  state = {
    tickets: [
      {key: 1, content: 'Zrób apke w react', state: 1},
      {key: 2, content: 'Zrób apke w vue', state: 0},
      {key: 3, content: 'Pograj na plejaku', state: 1},
      {key: 4, content: 'Zjedz kolację', state: 1},
      {key: 5, content: 'Zrób herbatkę', state: 1},
      {key: 6, content: 'Idź spać przed 23', state: 0},
      {key: 7, content: 'Umyj zęby', state: 1},
      {key: 8, content: 'Pościel wyro', state: 1},
      {key: 9, content: 'Ogarnij auto na ślub', state: 0},
      {key: 10, content: 'Jedź do mechanika', state: 0},
      {key: 11, content: 'Wstań o 7', state: 0}]
  }
  render() {
    return (
      <div>
        <h1>Zorganizuj swoje zadania!</h1>
        <div className = "Navigation">
          <Navigation/>
        </div>
        <div className="tickets-container">
          <div className="tickets">
            <Tickets 
              tickets = {this.state.tickets}
              state = {1}
            />
          </div>
          <div className="tickets">
            <Tickets 
              tickets = {this.state.tickets}
              state = {0}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
