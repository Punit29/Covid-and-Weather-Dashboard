import React from 'react';
import './weather.css';
import Forms from './Components/Form';
import Wth from './Components/Wth';
import './Components/Form.css'

const API_KEY = "c5a6f36df2e854825cf78b60209a47f9";

class weather extends React.Component{

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    

    if(city && country){
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error:""
      });
    }
    else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error:"Enter Location"
    });
  }
}


  render(){
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="conatainer">
              <div className="row">
                <div className="col-xs-7 form-container">
                <Forms getWeather={this.getWeather}/>
                  <Wth 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default weather;
