describe('Framework Test Suite', () => {

    let gd;
  
      before('This is before Hook', () => {
        cy.fixture("billomat-frontend-prod-data/login").then((data) => {
          gd = data;
        })
      })
  

  
      it('should login to app using valid credentials', () => {
        cy.log(gd.email)
      })
  
   
    });
