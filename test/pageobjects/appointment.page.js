  class AppointmentPage {


    get facilityDropdown () {
        return $("//select[@id='combo_facility']");
    }


    get hospitalReadmission () {
        return $("//input[@id='chk_hospotal_readmission']");

    }

    get noneCareProgram () {
        return $('#radio_program_none')
    }

    get medicareCareProgram () { 
        return $('#radio_program_medicare')
    }

    // get medicaidCareProgram () {
    //     return $('#radio_program_medicaid')
    // }

    get visitDate () {
        return $('#txt_visit_date')
    }

    get addComment () {
        return $('#txt_comment')
    }

    get bookAppointment () {
        return $('#btn-book-appointment')
    }

    get facilitySelected () {
        return $('#facility')
    }

    get dateSelected () {
        return $('#visit_date')
    }

    get commentWritten () {
        return $('#comment')
    }

    get pickedReadmission () {
        return $('#hospital_readmission')
    }

    get pickedProgram () {
        return $('#program')
    }

    get homePage () {
        return $("//a[normalize-space()='Go to Homepage']")
    }
    


    async selectFacility(selectedfacility) {
        await this.facilityDropdown.selectByVisibleText(selectedfacility);
    }
  
    async selectReadmission() {
        await this.hospitalReadmission.click();
    }

    async selectNoneHealthcare() {
        await this.noneCareProgram.click();
    }

    async selectMedicareHealthcare() {
        await this.medicareCareProgram.click(); 
    }

    // async selectMedicaidHealthcare() {
    //     await this.medicaidCareProgram.click(); 
    // }

    async selectVisitDate(date) {
        await this.visitDate.setValue(date);
    }

    async insertComment(comment) {
        await this.addComment.setValue(comment);
    }

    async makeAppointment() {
        await this.bookAppointment.click();
    }

    async assertbookedTokyoFacility() {
        await expect (this.facilitySelected).toHaveText('Tokyo CURA Healthcare Center');
    }


    async assertbookedDate() {
        await expect (this.dateSelected).toHaveText('12/11/2023');
    }

    async assertcomment () {
        await expect (this.commentWritten).toHaveText('Malaria');
    }

     async assertreadmissionSelected() {
        await expect (this.pickedReadmission).toHaveText('Yes');
    }

    async assertselectedProgram() {
        await expect (this.pickedProgram).toHaveText('None');
    }

    //   async selectHongKong() {
    //     await this.facilityDropdown.selectByVisibleText(selectedfacility);
    // }

    // async chooseVisitDate() {
    //     await this.visitDate.setValue(date);
    // }




    async btnHomePage() {
        await this.homePage.click();
    }
  
  
    
}





module.exports = new AppointmentPage();

  
  


        
 
