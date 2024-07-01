# I. Pre-requisites

Before you use this project, you only install Node Js (version >= 18)  in your computer

# II. Installation

```bash
npm install
```

# III. Project Structure

```bash
++  cypress/
    +-- configs/    # configuration for specific environment
    +-- constants/  # project constant
           +-- message-constants.js
           +-- url-constants.js            
    +-- fixtures/        # test data
    +-- pageobjects/   # page object folder
           +-- locators/    # locator
           +-- components   # where to store common page class which are used in the whole system
               ++ modal_dialog
               ++ calendar
           +-- base-page.js  
           +-- login-page.js
           +-- ...
    +-- e2e/     # test cases folder
           +-- api/      # API test cases
           +-- ui       # UI test cases
    +-- utils/    # store all common methods/libraries of system
    package.json
    cypress.config.js   # configuration of default environment  
    .gitignore

```

# IV. Usage
## 1. Run test, generate and open report

```bash
npm run test
allure open cypress/reports/allure-reports
```

## 2. Run with tags

- enable the tests with tag "@login" or "@deletebook"
```bash
    --env grepTags="@login @deletebook"
```
- enable the tests with both tags "login" and "delete"
```bash
--env grepTags="@login+@deletebook"
```
- enable the tests with "login" in the title and tag "@smoke"
```bash
--env grep=login,grepTags=@smoke
```
## 3. Multiple Environments
npx cypress run --config-file .\cypress\configs\cypress.prod.js

## 4. Cross Browser
- Default, it run in Electron browser 
```bash 
    npx cypress run --browser chrome
    npx cypress run --browser firefox
```

## 5. Headed - Headless
- Default, it will run in healess mode 
```bash 
   npx cypress run --browser firefox --headed
```

## 6. Running Cypress in Continuous Integration (CI)
+ GitHub Actions
+ Cypress Cloud

    In this framework, I have used Github Actions to define the below workflows 
    - install dependencies
    - run test
    - combine report
    - publish report to GitHub page

    We have different pipelines for different purposes 
    + parallel-cypress-multiple-job : to run different browser or to run system which can't  run im paralell with the same account
    + parallel-cypress-same-runner: run all tests in same image docker with different container
    + parallel-cypress-dashboard: run pallell in cypress dashboard

# V. References

1. https://docs.cypress.io/
2. https://www.npmjs.com/package/@shelex/cypress-allure-plugin
3. https://prettier.io/docs/en/options.html
4. Gitlab CI https://www.youtube.com/watch?v=srMqpQpPJ08
5. Allure Report: 
+ https://doanhoavn.wixsite.com/blog/post/use-allure-in-cypress
+ https://www.npmjs.com/package/@shelex/cypress-allure-plugin
6. Run with tags: https://github.com/cypress-io/cypress/tree/develop/npm/grep
  
