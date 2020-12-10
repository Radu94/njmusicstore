/// <reference types="cypress" />

describe('Logging In', () => {

    context('Use of valid user credentials', () => {

        beforeEach(() => {
            cy.visit("/");
        });

        it('should login app', () => {
            const account = {
                username: 'user1',
                password: 'pass1'
            };

            cy.get('[data-cy=login-link]').click();
            cy.get('[data-cy=username]').type(account.username);
            cy.get('[data-cy=password]').type(account.password);
            cy.get('[data-cy=login-btn]').click();

            cy.get('[data-cy=welcome]').should('have.text', `Welcome ${account.username} `);
        });

    });
});
