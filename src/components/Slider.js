import React from 'react';

import './Slider.css';

const Slider = (props) => {
    return ( 
        <div className="d-flex flex-row">
            <div className="col-md-4 mx-auto">
                <div className="panel">  
                    <h1 className="toggle-text">Date</h1>
                    <label id="date-switch" className="switch">
                        <input type="checkbox" checked={props.viewDate} onChange= {props.toggleDate} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
     );
}
 
export default Slider;