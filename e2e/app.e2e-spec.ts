import { MyNewPage } from './app.po';

describe('my-new App', () => {
  let page: MyNewPage;

  beforeEach(() => {
    page = new MyNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
