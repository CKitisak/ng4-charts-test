import { ChartsTestPage } from './app.po';

describe('charts-test App', () => {
  let page: ChartsTestPage;

  beforeEach(() => {
    page = new ChartsTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
