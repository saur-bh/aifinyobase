describe('Get Header Information', () => {
  it('should retrieve header information after logging in', () => {
    const username = 'saurabh.verma@aifinyo.de';
    const password = 'welcome123';

    // Make a POST request to login and retrieve a session cookie
    cy.request({
      method: 'POST',
      url: 'https://stagqa.billodev.net/app/auth/login',
      form: true, // Use form data
      body: {
        username: username,
        password: password,
        billomatId: "stagqa"
      }
    }).then((loginResponse) => {
      // Check if login was successful
      cy.log("this...." ,loginResponse.status);
      expect(loginResponse.status).to.eq(302);
      cy.log(loginResponse);
      // Extract session cookie from the response headers
      const sessionCookie = loginResponse.headers['set-cookie'];

      // Make a GET request to the target URL with the session cookie
      cy.request({
        method: 'GET',
        url: 'https://stagqa.billodev.net/app/beta',
        headers: {
          'Cookie': sessionCookie // Send session cookie in the request headers
        }
      }).then((targetResponse) => {
        // Retrieve and print headers from the target response
        const headers = targetResponse.headers;
        cy.log('Headers after login:', headers);
      });
    });
  });
});
