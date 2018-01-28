import { browser, by, element } from 'protractor';

var fs = require('fs');

export class HomePage {
  navigateTo() {
    return browser.get("http://localhost:3000");
  }

  getTitle() {
    return browser.getTitle();
  }

  getRows() {
    return element.all(by.className('row-table'));
  }

  getAddButton() {
    return element(by.id("addButton"));
  }

  getTeamNameInput() {
    return element(by.id("teamName"));
  }

  getTeamCodeInput() {
    return element(by.id("teamCode"));
  }

  getShortTeamNameInput() {
    return element(by.id("teamShortName"));
  }

  getPriceInput() {
    return element(by.id("price"));
  }

  getImageInput() {
    return element(by.id("image"));
  }


  takeScreenShot() {
    browser.takeScreenshot().then((png) =>
      this.writeScreenShot(png, 'exception.png'))
  }

  writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
  }

  sleep(sec: number) {
    browser.sleep(sec * 1000);
  }
}