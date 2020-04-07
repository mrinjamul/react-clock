import React, { Component } from 'react';
import NavBar from './components/navBar';
import Slider from './components/Slider';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
        title: "React Clock",
        viewDate: false,
        displayTime: "",
        displayDate: "",
    }

    setInterval(()=>{
        const time=new Date();
        var hh=time.getHours();
        var mm=time.getMinutes();
        var ss=time.getSeconds();

        var ampm=hh>=12?"PM":"AM";
        hh=hh>12?hh-12:hh;
        hh=hh<10?'0'+hh:hh;
        mm=mm<10?'0'+mm:mm;
        ss=ss<10?'0'+ss:ss;
        hh=hh==="00"?"12":hh;

        this.setState({
            displayTime: ss%2===0?hh+":"+mm+":"+ss+" "+ampm:hh+" "+mm+" "+ss+" "+ampm
        });

        let DAY=time.getDay();
        let DD=time.getDate();
        DD=DD<10?"0"+DD:DD;
        let MM=time.getMonth();
        let YY=time.getFullYear();
        let Months = [
          "January","February","March","April",
          "May","June","July","August",
          "September","October","November","December"
        ];
        let Days = [
          "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
        ];

        this.setState({
          displayDate: Days[DAY] + " " + Months[MM] + " " + DD + ", " + YY
        });
    }, 1000);
}

toggleDate = () => {
  this.setState(prevState => {
      return {
          viewDate: !prevState.viewDate
      }
  });
}
  // Done
  
  render() { 
    return ( 
      <div className="App">
        <NavBar title={this.state.title} />
        <Slider viewDate={this.state.viewDate} toggleDate={this.toggleDate} />
        <main className="container display">
          <h1 className="display-time"> {this.state.displayTime} </h1>
          <h3 className="display-date"> {this.state.viewDate && this.state.displayDate} </h3>
        </main>
        <div className="copyright">
          &copy; 2020 By Injamul Mohammad Mollah. All rights reserved.
        </div>
      </div>
     );
  }
}
 
export default App;