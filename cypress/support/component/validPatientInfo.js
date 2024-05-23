import PatientInfo from "../pageObjects/PatientInfoPage";

export default function validPaitentInfo() {
  const info = new PatientInfo();

  //valid weight pick
  cy.get(info.selectors.weight).clear();
  info.weightPick("71");
  //valid Height pick
  cy.get(info.selectors.height).clear();
  info.heightPick("170.3");
  //valid Temperature  pick
  info.tempPick("37");
  //valid Systolic  pick
  //no need
  //valid Diastolic  pick
  //no need
  //valid BP Unrecordable pick
  info.bpPick("Too High");
  //valid Pulse Rate pick
  info.pulsePick("66");
  //valid Respiratory Rate  pick
  info.RespiratoryPick("12");
  //valid Oxygen Saturation pick
  info.oxygenPick("96");
  //valid MUAC pick
  //unclickable
  //valid MUAC Score pick
  //unclickable
  //valid Abdominal Circumference pick
  info.abdominalCircumPick("232");
  //valid Head Circumference pick
  //unclickable
  //valid HC Score pick
  //unclickable
  //valid Note pick

  info.notePick("demo Note");
  info.sa
  //No error message should be visible
  cy.get(info.selectors.errorMessage).should("not.exist");

}
