'use strict';

class Forecast{
  constructor(){
    //https://developer.accuweather.com/
    this.key = 'oPt2V4bdauUcyBeisCGXY99Xgzpe5KIL';
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
  }

  async updateCity(city){
    const cityDets = await this.getCity(city);
    const weather = await this.getWeather(cityDets.Key);
    return { cityDets, weather };
  };

  async getCity(city){
    const query = `?apikey=${this.key}&q=${city}`;
    const res = await fetch(this.cityURI + query);
    const data = await res.json();
    return data[0];
  };

  async getWeather(locationId){
    const query = `${locationId}?apikey=${this.key}`;
    const res = await fetch(this.weatherURI + query);
    const data = await res.json();
    return data[0];
  };
};