const webdriverio = require('webdriverio');
const options = {
  desiredCapabilities: {
    browserName: 'chrome'
  },
  port: 9515
};
const actions = require('../actions/main');
const expect = require('chai').expect;
const SELECTORS = require('../lib/selectors');

let browser = webdriverio.remote(options);

describe('actions', function() {
  this.timeout(0);

  before((done) => {
    browser.init().then(() => done()).catch(done);
  });

  after((done) => {
    browser.end().then(() => done()).catch(done);
  });

  it('should get title of a url', function(done) {
    actions.getUrlTitle(browser, 'http://google.com')
          .then(function(title) {
            expect(title).to.equal('Google');
          })
          .then(done)
          .catch(done);
  });
})