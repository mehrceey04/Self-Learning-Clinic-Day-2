/*
  *Consuming a Public API using HTTP client library
  *Jokes are available at https://api.icndb.com
  *Use HTTP GET to retrieve what you want
  *Results are returned in JSON format
*/

var request = require('request');
request('http://api.icndb.com/jokes/340', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); 
  }
})