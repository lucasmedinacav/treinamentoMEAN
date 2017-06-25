import { MeanWebPage } from './app.po';

describe('mean-web App', () => {
  let page: MeanWebPage;

  beforeEach(() => {
    page = new MeanWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
