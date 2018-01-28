import { HomePage } from './app.po';

import * as request from 'request';
var request = require('request');

describe('cdp App:', () => {
  let page: HomePage;
  let uniqueShortName = 'shortTeamName';

  // beforeEach(() => {
  //   page = new HomePage();
  // });

  beforeAll(() => {
    page = new HomePage();
  });

  afterAll(() => {
    request.delete('http://localhost:8080/football/teams/' + uniqueShortName, function (error, response, body) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);

    });
  })

  it('Should display project title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('CDP Project');
  });

  it('Table should not be empty', () => {
    //page.sleep(5);
    page.getRows().count().then(function (originalCount) {
      console.log("StartCount:", originalCount);
    });

    expect(page.getRows().count()).toBeGreaterThan(0, "No rows are displayed on page!");
  });

  it('Add button is visible', () => {
    expect(page.getAddButton().isDisplayed()).toBeTruthy();
  });

  it('Inputs for adding new Team are present and enabled', () => {

    expect(page.getTeamNameInput().isDisplayed() && page.getTeamNameInput().isEnabled()).toBeTruthy("TeamName input is not enabled!");
    expect(page.getTeamCodeInput().isDisplayed() && page.getTeamCodeInput().isEnabled()).toBeTruthy("TeamCode input is not enabled!");
    expect(page.getShortTeamNameInput().isDisplayed() && page.getShortTeamNameInput().isEnabled()).toBeTruthy("ShortTeamName input is not enabled!");
    expect(page.getImageInput().isDisplayed() && page.getImageInput().isEnabled()).toBeTruthy("Image input is not enabled!");
    expect(page.getPriceInput().isDisplayed() && page.getPriceInput().isEnabled()).toBeTruthy("Price input is not enabled!");

  });

  it('Take screenshot', () => {
    page.takeScreenShot();
  });

  it('Verify that shortName is empty', () => {
    expect(page.getShortTeamNameInput().getText()).toBe("", "Short name input is not empty");
  });

  it('Add new team', () => {
    let rowsCount;
    page.getRows().count().then(c => {
      rowsCount = c;
    })
    page.getTeamNameInput().sendKeys("newTeamName");
    page.getTeamCodeInput().sendKeys("newTeamCode");
    page.getShortTeamNameInput().sendKeys(uniqueShortName);
    page.getPriceInput().sendKeys("newPrice");
    page.getImageInput().sendKeys("newImage");
    page.getAddButton().click().then(() => {
      expect(page.getRows().count()).toEqual(rowsCount + 1, "Team was not added");
    })
    page.sleep(3);
  });
});