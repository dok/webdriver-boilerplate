
module.exports = {
  getUrlTitle: (browser, url) => {
    return browser.url(url).getTitle();
  }
};