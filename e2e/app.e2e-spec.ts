import { BoilerPlatePage } from './app.po';

describe('boiler-plate App', () => {
  let page: BoilerPlatePage;

  beforeEach(() => {
    page = new BoilerPlatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
