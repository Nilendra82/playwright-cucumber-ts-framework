# Playwright with TS and BDD

## Features

1. Awesome report with screenshots, videos & logs
2. Execute tests on multiple environments 
3. Parallel execution
4. Rerun only failed features
5. Retry failed tests on CI
6. Page object model

## Sample report

## Project structure

- src -> Contains all the features & Typescript code
- test-results -> Contains all the reports related file

## Reports

1. [Mutilple Cucumber Report](https://github.com/WasiqB/multiple-cucumber-html-reporter)
2. Default Cucumber report
3. [Logs](https://www.npmjs.com/package/winston)
4. Screenshots of failure
5. Test videos of failure
6. Trace of failure

## Get Started

### Setup:

1. Clone the project
2. Open in the Visual Studio Code
3. `npm install` to install all the dependencies
4. `npx playwright install` to install the browsers
5. `npm run test` to execute the tests
6. To run a particular test change the following code in "cucumber.js" file 
```
  paths: [
            "src/test/features/featurename.feature"
         ] 
```
7. Use tags to run a specific or collection of specs
```
npm run test --TAGS="@test or @add"
```

### Folder structure
0. `src\pages` -> Write all logics in the page (UI screen)
1. `src\test\features` -> Add your all feature file here
2. `src\test\steps` -> Add your all step definitions here
3. `src\hooks\hooks.ts` -> Browser setup and teardown logic
4. `src\hooks\pageFixture.ts` -> PageFixture is used to share the page objects to step definitions
5. `src\helper\env` -> To handle Multiple environments
6. `src\helper\types` -> To get environment code suggestions
7. `src\helper\report` -> To generate the report
8. `config/cucumber.js` -> One file to do everything
9. `package.json` -> Dependencies repository
10. `src\helper\util` -> Read test data from json & logger
