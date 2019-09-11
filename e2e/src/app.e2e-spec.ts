import { AppPage } from './app.po';
import { WelcomePageView } from '@anviltech/fui-po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let welcome: WelcomePageView;

  beforeEach(() => {
    page = new AppPage();
    welcome = new WelcomePageView();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to ng-workspace-helper!');
  });

  it('should get the answer for everything', () => {
    page.navigateTo();
    expect(welcome.getTheAnswerToEverything()).toEqual(42);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
