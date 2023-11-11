const LoginPage = require('../pageobjects/login.page')

describe ('Login Workflow', function () {
     const valid_username = 'John Doe'
     const valid_password = 'ThisIsNotAPassword' 

     const invalid_username = 'secret'
     const invalid_password = 'Bridge'

     const empty_username = ''
     const empty_password = ''

  it('should login with valid credentials', async () =>  {
        await LoginPage.open();
        await LoginPage.login(valid_username, valid_password)
        var url = await LoginPage.currentUrl();
        expect(url).toContain('#appointment')
        await LoginPage.Logout();
        
  });

  it('user should not log in with invalid credentials', async () => {
       await LoginPage.open();
       await LoginPage.login(invalid_username,invalid_password);
       const message = await LoginPage.errorMessage();
       expect(message).toHaveText('Login Failed!')
  })



  it('should show error for empty credentials', async () => {
    await LoginPage.open();
     await LoginPage.login(empty_username,empty_password);
     const response = await LoginPage.errorMessage();
     expect(response).toHaveText('Login failed');
  })

    
});

