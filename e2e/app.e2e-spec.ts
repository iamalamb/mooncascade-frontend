import { MooncascadeFrontendPage } from './app.po';

describe('mooncascade-frontend App', () => {
  let page: MooncascadeFrontendPage;

  beforeEach(() => {
    page = new MooncascadeFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
