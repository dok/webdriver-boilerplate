const webdriverio = require('webdriverio');
const options = {
  port: 9515,
  desiredCapabilities: {
    browserName: 'chrome'
  }
};

const actions = require('./actions/main');

let browser = webdriverio.remote(options);
browser
  .init()
  .then(function() {
    return actions.getUrlTitle(browser, 'http://google.com')
  })
  .then(function(title) {
    console.log('title: ', title);
  })
  .catch(function(e) {
    console.log('error: ', e);
  });


