import { SslaPage } from './app.po';

describe('ssla App', function() {
  let page: SslaPage;

  beforeEach(() => {
    page = new SslaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
