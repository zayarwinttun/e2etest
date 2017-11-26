module.exports = {
  'open google.com': (browser) => {
    browser.url('https://www.google.co.jp/');
    browser.expect.element('body').to.be.present;
    browser.expect.element('#hplogo').to.be.visible;
    browser.end()
  }
}
