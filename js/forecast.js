'use strict';

//https://developer.accuweather.com/
const key = 'oPt2V4bdauUcyBeisCGXY99Xgzpe5KIL';

// get weather information
const getWeather = async (locationId) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${locationId}?apikey=${key}`;

  const res = await fetch(base+query);
  const data = await res.json();

  return data[0];
};

// get city information
const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const res = await fetch(base+query);
  const data = await res.json();

  return data[0];
};