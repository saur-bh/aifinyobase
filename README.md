#  Aifinyo's frontend / API  End-to-End testing using cypress -RunBook
The test was conducted on web browser
## Pre-Condition 
Install node.js and npm on the system
* Windows https://phoenixnap.com/kb/install-node-js-npm-on-windows
* Mac https://www.newline.co/@Adele/how-to-install-nodejs-and-npm-on-macos--22782681
* Linux(ubantu) https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/

## Tech Stack 
- javaScript 
- cypress
- reporter mochawsome

## Demo
<<>>

## Setup
* Navigate to desire location in your workstation and clone the project.
* Type command `git clone https://github.com/` on the terminal. 
* Open the folder in your favourite editor or VsCode.
* Install dependencies by running `npm install`

## Running Tests

* To run all  or  individual tests via GUI, run  `npm run cy:dresden`
* To run test in different configuration from command prompt, type `npm run `
* To run test in CI use following link [github] 

## Creation of New Test
Our framework is based on the Page Object Model design pattern. 
- Create new project in cypress/e2e/[projectname] i.e. cypress/e2e/billomat-frontend if alreayd not there.
- All the feature of the project will be in seperate folder i.e for Invoice Feature we will have folder as : cypress/e2e/billomat-frontend/1_Invoices 
- Two files one for the UI and other for the API will be in this folder. i.e.  and API : cypress/e2e/billomat-frontend/1_Invoices/InvoiceAPI.cy.js
- Any experiment or playground place is cypress/e2e/billomat-frontend/developement
- /fixture folder will be having all the test data for different envoirnment cypress/fixtures/billomat-frontend-prod-data/prod-data.json 
- /support folder will have all the locators and pages cypress/support/locators/billomat-frontend/clientPage.json pages cypress/support/pages/CommonItemPage.js
- If you have to create new page make sure to extend base Page 
## Enhancement
  * Publish report via gitpages or on slack channel 
  * from automation to manual case creation.

