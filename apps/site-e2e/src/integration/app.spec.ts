import { getTitles } from '../support/app.po';

describe('site', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title', () => {
    const h1s = getTitles();
    h1s.should('have.length', 2);
    h1s.first().contains('Garlic bread with cheese: What the science tells us');
  });
});
