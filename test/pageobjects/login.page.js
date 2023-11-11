class LoginPage {
    

    get btnMenu() {
        return $('#menu-toggle')
    }

    get loginBtn() {
        return $("//a[normalize-space()='Login']")
    }

    get inputUsername () {
        return $('#txt-username');
    }

    get inputPassword () {
        return $('#txt-password');
    }

    get btnLoginForm () {
        return $('#btn-login');
    }

    get btnLogout () {
        return $("//a[normalize-space()='Logout']");
    }

    get loginErrorMessage () {
        return $("//p[@class='lead text-danger']");
    }

    
    async open () {
        return browser.url('https://katalon-demo-cura.herokuapp.com/');
    }


    async login (username, password) {
        await this.btnMenu.click();
        await this.loginBtn.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLoginForm.click();
        
    }

    async currentUrl() {
         return browser.getUrl();

    }

    async Logout() { 
        await this.btnMenu.click();
        await this.btnLogout.click();
    }


    async errorMessage() {
        await this.loginErrorMessage.getText();
    }

    


  

 
 
}

module.exports = new LoginPage();
