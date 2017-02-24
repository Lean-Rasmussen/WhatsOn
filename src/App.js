import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Whats On</h2>
        </div>
        <from>
        <label> select a provider</label>
          <select>
            <option>api1</option>
          </select>
          <label>Search</label>
          <input type='search'></input> 
          <button>Search</button>

        </from>
        <div className='TVcontainer'>
          <div className='playerContainer'><h1>Player</h1></div>
          <div className='channelSelector'><h2>My favorit channels</h2></div>   
         </div>      
      </div>
    );
  }
}

export default App;
