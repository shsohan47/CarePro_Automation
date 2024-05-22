# CarePro_Automation
An Automation project for assignment given from Excel Technology ltd


# Cypress Automation Project

This repository contains a Cypress automation script using the Page Object Model (POM) structure. The project is designed to execute a large number of test cases efficiently.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn

## Installation

Follow these steps to install Cypress and set up the project:

### 1. Clone the Repository

```bash
git clone https://github.com/shsohan47/CarePro_Automation.git
cd your-repo-name

2. Install Dependencies
Using npm: npm install

3. Install Cypress
If Cypress is not installed globally, you can install it as a dev dependency:

Using npm:

bash
Copy code
npm install cypress --save-dev
Or using yarn:

bash
Copy code
yarn add cypress --dev
Running Tests
To execute the test cases, you can use the following commands:

Open Cypress Test Runner
This will open the Cypress Test Runner where you can run tests interactively.

Using npm:

bash
Copy code
npm run cypress:open
Or using yarn:

bash
Copy code
yarn cypress open
Run Tests in Headless Mode
This will run the tests in the command line without opening the Cypress Test Runner.

Using npm:

bash
Copy code
npm run cypress:run
Or using yarn:

bash
Copy code
yarn cypress run
Project Structure
The project follows the Page Object Model (POM) structure. Here's an overview of the directory structure:


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
integration/: Contains test case files.
plugins/: Contains plugins and configuration files for Cypress.
support/: Contains custom commands and the Page Object Model (POM) files.
page_objects/: Contains page object files that define the page elements and actions.