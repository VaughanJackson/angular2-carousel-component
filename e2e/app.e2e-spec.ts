import { Angular2CarouselComponentCliPage } from './app.po';

describe('angular2-carousel-component-cli App', function() {
  let page: Angular2CarouselComponentCliPage;

  beforeEach(() => {
    page = new Angular2CarouselComponentCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
