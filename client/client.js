'use strict';

const request = require('request');
// Constants
const PORT = 8080;

function test() {
  for (let instance = 1; instance <= 3; instance++) {
    request(`http://node-${instance}:8080`, (err, resp, body) => {

      if (err) {
        console.log(`error: ${err}`);
        return;
      }
      console.log(`$instance-${instance} statusCode: ${resp.statusCode}`)
      console.log(`$instance-${instance} body: ${body}`)
    })
  }
}

setTimeout(test, 5000);