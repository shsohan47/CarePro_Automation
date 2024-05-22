import PatientInfo from "../pageObjects/PatientInfoPage";
export default function clrBmi()
{
    const info = new PatientInfo()
    cy.get(info.selectors.weight).clear();
        cy.get(info.selectors.height).clear();
}
