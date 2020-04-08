import React, { Component } from 'react';

import './Clock.css';

class Clock extends Component {

    constructor(props) {
        super(props)
        this.state = {
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


    render() { 
        return ( 
            <div>
                <main className="container display">
                    <h1 className="display-time"> {this.state.displayTime} </h1>
                    <h3 className="display-date"> {this.props.viewDate && this.state.displayDate} </h3>
                </main>
            </div>
         );
    }
}
 
export default Clock;