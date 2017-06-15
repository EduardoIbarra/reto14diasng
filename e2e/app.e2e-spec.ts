import { NgNotasPage } from './app.po';

describe('ng-notas App', () => {
  let page: NgNotasPage;

  beforeEach(() => {
    page = new NgNotasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
