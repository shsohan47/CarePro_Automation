# Cypress Automation Project

This repository contains a Cypress automation script using the Page Object Model (POM) structure. The project is designed to execute a large number of test cases efficiently.

## Table of Contents

- [Project Overview](#project-overviewwhat-i-did)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)




## Project Overview(what I did)

This project implements a POM-based structure for better understanding and reusability. Here are the key features of the project:

- **Page Object Model (POM)**: Enhances readability and reusability of code.
- **Session Management**: Stores sessions to avoid logging in every time, reducing test execution time.
- **Standardized Code**: Implements functions to adhere to standard coding policies.
- **Professional Code Structure**: Organized in a professional manner for maintainability.
- **Test Scripts**: Includes three main test scripts:
  - **Authentication**: Automates all login and authentication processes.
  - **Facilities**: Automates every possible test case related to facilities.
  - **Vitals**: Main part of automation, includes validation, boundary value testing, etc.
- **Custom Cypress Configuration**: Modifies `cypress.config.js` to set base URL, default command timeout, and run all specs.
- **Assertions**: Contains numerous assertions for each test case to handle every scenario and verify URL redirects correctly.
- **Screen Shot**: ![image](https://github.com/shsohan47/CarePro_Automation/assets/36979745/286e9387-31e5-43e9-b973-0d7da86b68a5)
- **Screen Video**: https://github.com/shsohan47/CarePro_Automation/assets/36979745/4d31f004-2a6a-40e5-a946-04f1275f7dc0



## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn

## Installation

Follow these steps to install Cypress and set up the project:

### 1. Clone the Repository

git clone https://github.com/shsohan47/CarePro_Automation.git
cd CarePro_Automation


### 2. Install Dependencies
npm install


### 3. Install Cypress
If Cypress is not installed globally, you can install it as a dev dependency:


npm install cypress --save-dev

### 4. Running Tests
To execute the test cases, you can use the following commands:

Open Cypress Test Runner
This will open the Cypress Test Runner where you can run tests interactively.

Using npm:

npx cypress open || npm run cypress:open


## project-structure
The project follows the Page Object Model (POM) structure. Here's an overview of the directory structure:


project-structure

CarePro_Automation/
├── cypress/
│   ├── fixtures/
│   |--e2e
|       |--auth_automation.cy.js
|       |--facility_automation.cy.js
|       |--vital_automation.cy.js
│   ├── support/
│   │   ├── commands.js
│   │   ├── index.js
│   │   └── page_objects/
│   │       ├── loginPage.js
│   │       └── ClientSearch.js
│   │       ├── facilityPage.js
│   │       └── PatientInfoPage.js
│   ├── component/
│   │   ├── clearBMI.js
│   │   ├── validPatientInfo.js
├── node_modules/
├── .gitignore
├── cypress.json
├── package.json
└── README.md

fixtures/: Contains test data files.
support/: Contains custom commands and the Page Object Model (POM) files.
page_objects/: Contains page object files that define the page elements and actions.

