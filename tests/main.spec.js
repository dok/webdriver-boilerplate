const webdriverio = require('webdriverio');
const expect = require('chai').expect;

const options = {
  desiredCapabilities: {
    browserName: 'chrome'
  },
  port: 9515
};
let browser = webdriverio.remote(options);

describe('An example spec', function() {
  this.timeout(0);

  var client;
  before((done) => {
    client = browser.init().then(() => done()).catch(done);
  });

  after((done) => {
    client.end().then(() => done()).catch(done);
  });

  it('should go to google.com', function(done) {
    client.url('http://google.com')
          .title()
          .then(function(result) {
            expect(result.value).to.equal('Google');
            done();
          })
          .catch(done);
  });
});