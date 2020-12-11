/// <reference types="cypress" />

describe('Logging In', () => {

    context('Use of valid user credentials', () => {
        const accounts = [
            {
                username: 'user1',
                password: 'pass1'
            },
            {
                username: 'user2',
                password: 'pass2'
            },
            {
                username: 'admin',
                password: 'admin'
            }
        ];

        beforeEach(() => {
            cy.visit('/');
        });

        accounts.forEach( account => {
            it(`should login app as ${account.username}`, () => {
                cy.get('[data-cy=login-link]').click();

                cy.get('[data-cy=username]').type(account.username);
                cy.get('[data-cy=password]').type(account.password);
                cy.get('[data-cy=login-btn]').click();

                cy.get('[data-cy=welcome]').should('have.text', `Welcome ${account.username} `);
            });
        });
    });


});
