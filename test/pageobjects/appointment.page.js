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

    async bookedTokyoFacility() {
        await this.facilitySelected.getText();
    }


    async bookedDate() {
        await this.dateSelected.getText();
    }

    async comment () {
        await this.commentWritten.getText();
    }

     async readmissionSelected() {
        await this.pickedReadmission.getText();
    }

    async selectedProgram() {
        await this.pickedProgram.getText();
    }

      async bookedHongKongFacility() {
        await this.facilitySelected.getText();
    }

   


    //   async bookedTokyoFacility() {
    //     await this.facilitySelected.getText();
    // }



    async btnHomePage() {
        await this.homePage.click();
    }
  
  
    
}





module.exports = new AppointmentPage();

  
  


        
 
