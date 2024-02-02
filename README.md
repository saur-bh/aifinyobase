#  Aifinyo's frontend application testing using cypress -RunBook
The test was conducted on web browser ( Chrome V111.0.5563.147 , Edge V105 and Electron V105)
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

TDB

## Setup
* Navigate to desire location in your workstation and clone the project.
* Type command `git clone https://github.com/saur-bh/pflegia-challenge.git` on the terminal. 
* Open the folder in your favourite editor or VsCode.
* Install dependencies by running `npm install`

## Running Tests

* To run all  or  individual tests via GUI, run `npm run cy:open`
* To run test in different configuration from command prompt, type `npm run cy:run:chrome | cy:run:edge |cy.run:electron`
* To run test in CI use following link [github] 

## Creation of New Test
Our framework is based on the Page Object Model design pattern. 
- If required create paage, create new file in /e2e-frontend/cypress/support/pages i.e. login.js which will extend BasePage.js. 
- Create new folder if not present under cypress/e2e/modulename for module which test has to be written.
- If module in present , create testfile with .cy.js extension  i.e./e2e-frontend/cypress/e2e/1_Invoices/[filename].cy.js

## Viewing the Results HeadlessMode 
 - Once test is run using `npm run cy:run:chrome`, result will be store in cypress/reports which is html file.
  ![artifcat](./resource/result.PNG)
 - Execution video can be located in cypress/videos.
## Enhancement
  * Publish report via gitpages or on slack channel 
  * Excution via CI pipeline github action
  * Automation bot to execute testSuite from slack or any other medium. 

