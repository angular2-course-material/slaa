import { SlaaPage } from './app.po';

describe('slaa App', function() {
  let page: SlaaPage;

  beforeEach(() => {
    page = new SlaaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
