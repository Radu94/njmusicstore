/// <reference types="cypress" />

describe('Registration Of', () => {

    context('A new new user', () => {
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

            it(`should fail for an existing user account [${accounts[0].username}]`, () => {
                cy.get('[data-cy="register-link"]').click();

                cy.get('[data-cy=username]').type(accounts[0].username);
                cy.get('[data-cy=password]').type(accounts[0].password);
                cy.get('[data-cy=register-btn]').click();

                cy.get('[data-cy=error-message]').should('contain.text', 'Error! User is already taken !');
                cy.get('[data-cy=welcome]').should('not.exist');
            });
    });


});
