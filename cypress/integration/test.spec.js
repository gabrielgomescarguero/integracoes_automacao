describe('Mocha’s interface', () => {
    context('it provides a way to keep tests easier to read and organized.', () => {
      it('This is your test case', () => {
        expect(true).to.eq(true)
      });
    });
  });


describe('Products api', () => {

  beforeEach(() => {
    cy.login();
  });

  
  context('GET /produtos', () => {
      it('should return a list with all products', () => {
          cy.request({
              method: 'GET',
              url: 'https://serverest.dev/produtos'
          })
              .should((response) => {
                  cy.log(JSON.stringify(response.body))
              });
      });
  });
});





describe('Products api', () => {
  context('GET /produtos', () => {
      it('should return a list with all products', () => {
          cy.request({
              method: 'GET',
              url: 'https://serverest.dev/produtos'
          })
              .should((response) => {
                  expect(response.status).to.eq(200)
                  expect(response.body.quantidade).to.eq(50)
                  expect(response.body.produtos.length).to.be.eq(50);
                  expect(response.body.produtos[0]).to.have.all.keys(
                    'nome', 'preco', 'descricao', 'quantidade', '_id'
                  )
              });
      });
  });
});