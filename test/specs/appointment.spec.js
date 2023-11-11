const LoginPage = require('../pageobjects/login.page')
const AppointmentPage = require('../pageobjects/appointment.page')

describe ('Appointment Workflow', function () {
     const valid_username = 'John Doe'
     const valid_password = 'ThisIsNotAPassword'
     const tokyo_facility = 'Tokyo CURA Healthcare Center'
     const Date = '12/11/2023'
     const feedback = 'Malaria'
     


  it('should book an appointment', async () => {
        await LoginPage.open();
        await LoginPage.login(valid_username, valid_password) 
        var url = await LoginPage.currentUrl();
        expect(url).toContain('#appointment')
        await AppointmentPage.selectFacility(tokyo_facility);
        await AppointmentPage.selectReadmission();        
        await AppointmentPage.selectNoneHealthcare();
        await AppointmentPage.selectVisitDate(Date);
        await AppointmentPage.insertComment(feedback);
        await AppointmentPage.makeAppointment();
        const facility = await AppointmentPage.bookedFacility();
        expect(facility).toHaveText('Tokyo CURA Healthcare Center');
        // await AppointmentPage.assertfacilityDropdown();
        // await AppointmentPage.asserthospitalReadmission('yes');
        // await AppointmentPage.asserthealthCareProgram('None');
        // await AppointmentPage.assertvisitDate('12/11/2023');
        // await AppointmentPage.assertinsertComment('Malaria')
         



    });




});