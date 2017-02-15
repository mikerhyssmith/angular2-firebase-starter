import { ANGULARFIRESAMPLEPage } from './app.po';

describe('angular-fire-sample App', function() {
  let page: ANGULARFIRESAMPLEPage;

  beforeEach(() => {
    page = new ANGULARFIRESAMPLEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
