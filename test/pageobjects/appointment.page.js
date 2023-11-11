  class AppointmentPage {


    get facilityDropdown () {
        return $("//select[@id='combo_facility']");
    }

    get hospitalReadmission () {
        return $("//input[@id='chk_hospotal_readmission']");

    }

    get healthCareProgram () {
        return $('#radio_program_none')
    }

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
    


    async selectFacility(selectedfacility) {
        await this.facilityDropdown.selectByVisibleText(selectedfacility);
    }
  
    async selectReadmission() {
        await this.hospitalReadmission.click();
    }

    async selectNoneHealthcare() {
        await this.healthCareProgram.click();
    }

    async selectVisitDate(date) {
        await this.visitDate.setValue(date);
    }

    async insertComment(comment) {
        await this.addComment.setValue(comment);
    }

    async makeAppointment() {
        await this.bookAppointment.click();
    }

    async bookedFacility() {
        await this.facilitySelected.getText();

    
  
  
    }
}





module.exports = new AppointmentPage();

  
  


        
 
