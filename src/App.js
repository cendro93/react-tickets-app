import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Tickets from './components/Tickets/Tickets'
class App extends Component {
  state = {
    tickets: [
      {id: 1, content: 'Zrób apke w react', state: 'active'},
      {id: 2, content: 'Zrób apke w vue', state: 'active'},
      {id: 3, content: 'Pograj na plejaku', state: 'active'},
      {id: 4, content: 'Zjedz kolację', state: 'active'},
      {id: 5, content: 'Zrób herbatkę', state: 'active'},
      {id: 6, content: 'Idź spać przed 23', state: 'active'},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Zorganizuj swoje zadania!</h1>
        <div>
          <Navigation/>
        </div>
        <div>
          <Tickets 
          tickets = {this.state.tickets}
          />
        </div>
      </div>
    );
  }
}

export default App;
