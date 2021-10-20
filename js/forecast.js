'use strict';

//https://developer.accuweather.com/
// 55 request per day
const key = 'oPt2V4bdauUcyBeisCGXY99Xgzpe5KIL';

// get weather information
const getWeather = async (locationId) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${locationId}?apikey=${key}`;

  const res = await fetch(base+query);
  const data = await res.json();

  // console.log(data);
  return data[0];
};

// get city information
const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const res = await fetch(base+query);
  const data = await res.json();

  // console.log(data);
  // [0] is the closest match
  return data[0];
};

// dummy test code
// getCity('manchester').then(data => {
//   return getWeather(data.Key);
// }).then(data => {
//   console.log(data);
// })
// .catch(err => console.log(err));