const expect = require('chai').expect;
const request = require('request');

it('Main page content', function(done) {
  request('https://localhost:4250/' , function(error, response, body) {
    // expect(body).to.equal('');
    done();
  });
});
