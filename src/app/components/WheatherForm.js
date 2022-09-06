import React from "react";

const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Your City Name" className="form-control" autoFocus/>
            </div>
            <div className="form-group">
                <input type="text" name="country" placeholder="Your Country Name" className="form-control "/>
            </div>
            <button className="button">
                <span class="text">Get</span>
                <i class="gg-check icon"></i>
            </button>
        </form>
    </div>
)

export default WeatherForm;