  class AppointmentPage {


    get facility () {
        return $("//select[@id='combo_facility']");
    }

    get hospitalreadmission () {
        return $("//input[@id='chk_hospotal_readmission']");

  }


    async facility() {
        await this.btnFacility.click();
    }
  
    async hospitalreadmission() {
        await this.btnHospitalReadmission.click();
    }


}





module.exports = new AppointmentPage();

  
  


        
 
