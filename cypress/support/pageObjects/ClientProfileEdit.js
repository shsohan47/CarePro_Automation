export default class ClientEdit{
    selectors={
        firstName: '.p-5 > .grid > :nth-child(1) > .flex-col > .custom-input',
        lastName: ':nth-child(1) > .p-5 > .grid > :nth-child(2) > .flex-col > .custom-input',
        dateOfBirth: ':nth-child(3) > .flex-col > .react-datepicker-wrapper > .react-datepicker__input-container > .custom-input',
        sex: ':nth-child(1) > .p-5 > .grid > :nth-child(4) > .flex-col > .custom-input',
        esDOB: '#isDOBEstimated',
        NRC: ':nth-child(1) > .p-5 > .grid > :nth-child(6) > .flex-col > .custom-input',
        country: ':nth-child(1) > .p-5 > .grid > :nth-child(7) > .flex-col > .custom-input',
        noNRC: '#noNRC',
        napsaNum: ':nth-child(9) > .flex-col > .custom-input',
        registrationDate: ':nth-child(11) > .flex-col > .react-datepicker-wrapper > .react-datepicker__input-container > .custom-input',
        
    }
}