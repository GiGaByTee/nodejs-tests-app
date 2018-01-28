

import * as request from 'request';
var request = require('request');
let error1;
let response1;
let body1;
describe('cdp App:', () => {

beforeAll(()=> {
  request.get('http://localhost:8080/football/teams/', function (error, response, body) {
    console.log(error);
      this.error1 = error;
      this.response1 = response;
      this.body1 = body;
   
    });

})

  it('Get all teams', () => {
        expect(response1).toBeTruthy();
        expect(response1.statusCode).toEqual(200, "Wrong statusCode!");
        expect(body1).not.toContain("error");
  });



});