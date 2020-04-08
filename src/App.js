import React, { Component } from 'react';
import NavBar from './components/navBar';
import Slider from './components/Slider';
import Clock from './components/Clock';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
        title: "React Clock",
        viewDate: false,
    }
  }
  toggleDate = () => {
    this.setState(prevState => {
        return {
            viewDate: !prevState.viewDate
        }
    });
  }
  
  render() { 
    return ( 
      <div className="App">
        <NavBar title={this.state.title} />
        <Slider viewDate={this.state.viewDate} toggleDate={this.toggleDate} />
        <Clock viewDate={this.state.viewDate} />
        <div className="copyright">
          &copy; 2020 By Injamul Mohammad Mollah. All rights reserved.
        </div>
      </div>
     );
  };
}
 
export default App;