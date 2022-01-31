# Cypress.io
Automation script for two features of cypress site

### Whole Process:
> Create a work folder 
> Open VS code and open a work folder
> Open terminal and give following commands:
	npm init -y
	npm install cypress
	npx cypress open
==================================================================================================
==================================================================================================
>>> Creating Report:

step1:  npm install mochawesome --save-dev
step2:  npm install mochawesome-merge --save-dev
step3: add following reports configuration in cypress.json
{ 
"reporter": "mochawesome",
 "reporterOptions": {
   "charts": true,
   "overwrite": false,
   "html": false,
   "json": true,
   "embeddedScreenshots": true,
   "reportDir": "cypress/report/mochawesome-report"
 },
  "screenshotsFolder": "cypress/Screenshots"
}
step4:  npx cypress run --reporter mochawesome
step5:  npx mochawesome-merge cypress/report/mochawesome-report/*.json ＞ cypress/report/output.json
	or
	npx mochawesome-merge cypress/report/mochawesome-report/*.json | out-file -encoding ascii cypress/report/output.json
step6:  npx marge cypress/report/output.json --reportDir ./ --inline
==================================================================================================

# Solution of the error:
**cy.get('h2').should('contain', 'Game changers') //section_07**
I made this error intentionally just to show the screenshot of the error in the report.
