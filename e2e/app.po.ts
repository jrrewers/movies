import { browser, element, by } from 'protractor';

export class MoviesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mov-root h1')).getText();
  }
}
