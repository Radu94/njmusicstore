// / <reference types="cypress" />

describe('Shopping cart for', () => {
  context('User 1', () => {
    beforeEach(() => {
      cy.visit('/cart?username=user1');
    });

    it('should have two items', () => {
      cy.get('[data-cy=cart-item]').should('have.length', 2);
      cy.get('[data-cy=trackname]').eq(0).should('have.text', 'A Single Rose');
      cy.get('[data-cy=trackname]').eq(1).should('have.text', 'Summer Rain');
      cy.get('[data-cy=grandtotal]').should('have.text', 1.98);
    });
  });
});
