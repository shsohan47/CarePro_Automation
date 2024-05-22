export default class PatientInfo{
    //all selectors
        selectors={
            date:":nth-child(1) > .flex-col > .custom-input'",
            time:":nth-child(2) > .flex-col > .custom-input'",
            weight:':nth-child(3) > .flex-col > .custom-input',
            height:':nth-child(4) > .flex-col > .custom-input',
            temp:':nth-child(5) > .flex-col > .custom-input',
            systolic:':nth-child(6) > .flex-col > .custom-input',
            diastolic:':nth-child(7) > .flex-col > .custom-input',
            bp:':nth-child(8) > .flex-col > .custom-input',
            pulseRate:':nth-child(9) > .flex-col > .custom-input',
            respiratoryRate:':nth-child(10) > .flex-col > .custom-input',
            oxygen:':nth-child(11) > .flex-col > .custom-input',
            muac:":nth-child(12) > .flex-col > .custom-input",
            muacScore:':nth-child(13) > .flex-col > .custom-input',
            abdominal:':nth-child(14) > .flex-col > .custom-input',
            headCircum:':nth-child(15) > .flex-col > .custom-input',
            hcScore:':nth-child(16) > .flex-col > .custom-input',
            note:':nth-child(17) > .flex-col > .custom-input',
            dateCancel: ':nth-child(1) > .flex-col > .react-datepicker-wrapper > .react-datepicker__input-container > .react-datepicker__close-icon',
            timeCancel: ':nth-child(2) > .flex-col > .react-datepicker-wrapper > .react-datepicker__input-container > .react-datepicker__close-icon',
            errorMessage: '.input_error'
      }
      datePick(date)
      {
        return cy.get(this.selectors.date).type(date);
      }
      timePick(time){
        return cy.get(this.selectors.time).type(time)
      }
      weightPick(weight)
      {
        return cy.get(this.selectors.weight).type(weight);
      }
      heightPick(heights)
      {
        return cy.get(this.selectors.height).type(heights);
      }
      tempPick(temp)
      {
        return cy.get(this.selectors.temp).type(temp);
      }
      systolicPick(sys)
      {
        return cy.get(this.selectors.systolic).type(sys);
      }
      diastolicPick(dias)
      {
        return cy.get(this.selectors.diastolic).type(dias);
      }
      bpPick(bp)
      {
        return cy.get(this.selectors.bp).select(bp);
      }
      pulsePick(pulses)
      {
        return cy.get(this.selectors.pulseRate).type(pulses);
      }
      RespiratoryPick(res)
      {
        return cy.get(this.selectors.respiratoryRate).type(res);
      }
      oxygenPick(oxy)
      {
        return cy.get(this.selectors.oxygen).type(oxy);
      }
      muacPick(muac)
      {
        return cy.get(this.selectors.muac).type(muac);
      }
      muacScorePick(muacS)
      {
        return cy.get(this.selectors.muacScore).type(muacS);
      }
      abdominalCircumPick(abs)
      {
        return cy.get(this.selectors.abdominal).type(abs)
      }
      headCirPick(head)
      {
        return cy.get(this.selectors.headCircum).type(head);
      }
      hcScorePick(hcPick)
      {
        return cy.get(this.selectors.hcScore).type(hcPick);
      }
      notePick(notes)
      {
        return cy.get(this.selectors.note).type(notes);
      }
      fieldClear(selector)
      {
        return cy.get(this.selectors[selector]).clear();
      }
      errorAssertion(assert,msg)
      {
        return cy.get(this.selectors.errorMessage).should(assert,msg)
      }
    }
