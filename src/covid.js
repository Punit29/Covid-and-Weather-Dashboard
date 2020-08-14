import React from 'react';
import './covid.css';
import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async(country)=>{
  let changeableUrl = url;

  if(country){
    changeableUrl = `${url}/countries/${country}`;
  }

  try{
    const {data : {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);

    return {confirmed, recovered, deaths, lastUpdate};
  }
  catch(error){
    console.log(error);
  }
}

export const fetchDailyData = async () =>{
  try{
    const {data} = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData)=>({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  }catch(error){
    console.log(error);
  }
}

export const fetchCountries = async() =>{
  try{
    const{data:{countries}} = await axios.get(`${url}/countries`);
    return countries.map((country)=> country.name);
  } catch(error){
      console.log(error);
  }
}


class covid extends React.Component{

  state = {
    data:{},
    country:'',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
  
    this.setState({data : fetchedData});
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    this.setState({data : fetchedData, country: country});
  }

  render(){
    const {data,country} = this.state;

    return (
      <div className="container">
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart  data={data} country={country}/>
      </div>
    );
  }
}

export default covid;
