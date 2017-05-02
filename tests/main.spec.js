const webdriverio = require('webdriverio');
const options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
};
const actions = require('../actions/main');
const expect = require('chai').expect;
const SELECTORS = require('../lib/selectors');

describe('put your actual tests here', function() {
  this.timeout(0);

  before((done) => {
    browser.init().then(() => done()).catch(done);
  });

  after((done) => {
    browser.end().then(() => done()).catch(done);
  });
})