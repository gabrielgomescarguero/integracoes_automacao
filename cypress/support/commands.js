Cypress.Commands.add('login', (userName, password) => {
    cy.request({
        method:'POST', 
        url:'https://odms.baitussalam.org:8445/api/v1/auth/login',
        body: {
          userName,
          password,
        }
      })
      .as('loginResponse')
      .then((response) => {
        Cypress.env('token', response.body.accessToken); // either this or some global var but remember that this will only work in one test case
        return response;
      })
      .its('status')
      .should('eq', 200);
  })