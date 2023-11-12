const LoginPage = require('../pageobjects/login.page')
const AppointmentPage = require('../pageobjects/appointment.page')

describe ('Appointment Workflow', function () {
     const valid_username = 'John Doe'
     const valid_password = 'ThisIsNotAPassword'
     const tokyo_facility = 'Tokyo CURA Healthcare Center'
     const hongkong_facility = 'HongKong CURA Healthcare Center'
     const Date = '12/11/2023'
     const hongkong_date = '24/11/2023'
     const feedback = 'Malaria'
     const hongkong_feedback = 'Headache'
     


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
        await AppointmentPage.assertbookedTokyoFacility();
        await AppointmentPage.assertbookedDate();
        await AppointmentPage.assertcomment();
        await AppointmentPage.assertreadmissionSelected();
        await AppointmentPage.assertselectedProgram();
        await AppointmentPage.btnHomePage();


    });

    // it('should assert the appointment details', async () => {
    //      await LoginPage.open();
    //      await AppointmentPage.selectFacility(hongkong_facility);
    //      await AppointmentPage.selectReadmission();
    //      await AppointmentPage.selectMedicareHealthcare();
    //      await AppointmentPage.selectVisitDate(hongkong_date);
    //      await AppointmentPage.insertComment(hongkong_feedback);
    //      await AppointmentPage.makeAppointment();
    //     //  const hongkong = await AppointmentPage.bookedHongKongFacility();
    //     // expect(hongkong).toHaveText('HongKong CURA Healthcare Center');
    //     await AppointmentPage.btnHomePage();      


    // })



});