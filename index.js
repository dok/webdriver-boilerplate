const webdriverio = require('webdriverio'); // Get the WebDriverIO module

const options = {
  port: 9515, // We look for WebDriver on port 9515 
  desiredCapabilities: {
    browserName: 'chrome' // Let's use chrome
  }
};

let browser = webdriverio.remote(options);

browser 
  .init() // initialize the session
  .url('http://google.com') // go to http://google.com
  .title() // get the title
  .then(function(title) {
    console.log('title: ', title); // console.log logs out things that you put into it, into the terminal.
  })
  .catch(function(e) {
    console.log('error: ', e);
  });


