import React, { Component } from 'react';
// import axios from 'axios';
import './css/style.css';
import clearSky from './assets/icons/clearSky.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      weatherToday: '',
      weatherTodayDescription: '',
      weatherTodayTemp: '',
    };

    this.getApi = this.getApi.bind(this);
  }

  componentDidMount() {
    this.getApi();
  }

  getApi() {
    const API = 'http://api.openweathermap.org/data/2.5/forecast?id=2643743&APPID=048663f39dba3d510ddc95becdf85b01';
    fetch(API)
      .then((res) => {
        const response = res.json();
        response.then((data) => {
          this.setState({ data });
          console.log('Data', data);

          const weatherToday = `${data.list[0].dt_txt}`;
          this.setState({ weatherToday });

          const weatherTodayDescription = `${data.list[0].weather[0].description}`;
          this.setState({ weatherTodayDescription });

          const weatherTodayTemp = `${data.list[0].main.temp}`;
          console.log(weatherTodayTemp);
          this.setState({ weatherTodayTemp });
        });
        console.log('Response', res);
      })
      .catch(e => {
        console.error('Error', e);
      });
  }

  render() {
    return (
      <div>
        <div className="weather-today">
          <div className="weather-condition">
            <h1>{this.state.weatherToday}</h1>
            <img src={clearSky} alt={this.state.weatherTodayDescription} />
            <p>{this.state.weatherTodayDescription}</p>
          </div>
          <div className="weather-temperature">
            <h1>{this.state.weatherTodayTemp}</h1>
            <p>{this.state.weatherTodayTemp}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
