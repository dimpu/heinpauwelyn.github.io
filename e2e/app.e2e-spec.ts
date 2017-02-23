import { PersonalblogPage } from './app.po';

describe('personalblog App', function() {
  let page: PersonalblogPage;

  beforeEach(() => {
    page = new PersonalblogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
