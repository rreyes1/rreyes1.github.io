import { RRFBPage } from './app.po';

describe('rrfb App', function() {
  let page: RRFBPage;

  beforeEach(() => {
    page = new RRFBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
