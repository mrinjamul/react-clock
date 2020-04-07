import React, { Component } from 'react';
import NavBar from './components/navBar';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  render() { 
    return ( 
      <div className="App">
        <NavBar />
        <main className="container">
          <h1 className="text-center">React</h1>
        </main>
      </div>
     );
  }
}
 
export default App;