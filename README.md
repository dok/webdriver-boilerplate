WebDriver boilerplate
=========================

An opinionated boilerplate for WebDriver

### Dependencies

- If you are on windows, install [Cmder](http://cmder.net/) before proceeding to the steps below
- [Git](https://git-scm.com/download/)
- [Node >v6](https://docs.npmjs.com/getting-started/installing-node)

### Installation

- Once you have NPM downloaded: run npm install 
- run `git clone https://github.com/dok/webdriver-boilerplate` in your terminal

### Running the test

- Run ChromeDriver
  - For mac: `npm run chromedriver:mac`
  - For windows: `.\drivers\windows\chromedriver.exe --url-base=/wd/hub`
- Run index.js
  - `node index.js`
- Run tests
  - `npm run test`


### API Docs to refer to

- [WebDriverIO](http://webdriver.io/api.html)
- [Chai](http://chaijs.com/api/bdd/)
