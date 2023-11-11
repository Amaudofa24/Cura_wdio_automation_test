const LoginPage = require('../pageobjects/login.page')
const AppointmentPage = require('../pageobjects/appointment.page')

describe ('Appointment Workflow', function () {
     const valid_username = 'John Doe'
     const valid_password = 'ThisIsNotAPassword' 


  it('should book an appointment', async () => {
        await LoginPage.open();
        await LoginPage.login(valid_username, valid_password) 
        var url = await LoginPage.currentUrl();
        expect(url).toContain('#appointment')
        const dropDown = await $("//select[@id='combo_facility']");
        await dropDown.selectByIndex(1);
       // $("//select[@id='combo_facility']").selectByIndex(1);
        console.log(await dropDown.getValue());
        let element = await $("//input[@id='chk_hospotal_readmission']");
        console.log(await element.isSelected());
        



  });




});