import Cities from './Cities';

// whatever you export from this module will be the
// city that the app references

let getCity = function getCity(city) {
  return Cities.find(c => c.url === city) || Cities.find(c => c.url === 'lansing');
};

let current = location && location.pathname.length > 1 ? location.pathname.match(/\/(.[^/]+)/)[1] : 'lansing';
export default getCity(current) ? getCity(current) : getCity("lansing");
