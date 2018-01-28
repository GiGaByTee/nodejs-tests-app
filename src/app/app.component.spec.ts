import { LetslearnPage } from '../../e2e/app.po';
import { async, TestBed } from '@angular/core/testing';
describe('letslearn App', () => {
  let page: LetslearnPage;

  beforeEach(() => {
    page = new LetslearnPage();
  });

  it('Should display Letslearn title',async (() => {
    page.navigateTo();
    expect("app.title").toEqual('Letslearn'); /* change title */
  }));
});