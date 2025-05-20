# reedsy-challenge-quality-assurance
## Prerequisites

Before setting up the project, ensure you have the following:

- **Node.js**: Version 14.x or above (Download from [Node.js](https://nodejs.org/))
- **npm**: Comes with Node.js, but ensure you have the latest version by running `npm install -g npm`


## ✅ Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/jsingh181/reedsy-challenge-quality-assurance.git
   cd reedsy-challenge-quality-assurance

2. Install dependencies:
   ```bash
   npm install

3. Install Cypress (version 10.x or above):
   ```bash
   npm install cypress --save-dev  

> **Tip:** To confirm that cypress is installed correctly, run: `npx cypress --version`  

<br>  

## ⚠️ Run Local Application
Cypress in this project is configured to use a locally running application as the `baseUrl`, so this should be started in a new terminal window before launching the Cypress test runner below. 

**This is especially important if you wish to use the cypress test runner (GUI)!**

1. `cd` into the repository folder - /reedsy-challenge-quality-assurance
2. Run the folllowing
```bash
 npm --prefix ./challenges/qa run start
```
<br>  

## ▶️ Running Cypress Tests
There are two main ways of running these tests:
   
1. Open Cypress (interactive mode):**
   ```bash
   npx cypress open
** assuming local application is running
   
2. Run the tests (headless mode):
   ```bash
    npm run test:e2e

> **Note:** Running Cypress in headless mode does not require the localhost app to be started seperately. For the puposes of the test runner, you will need to run the application using the steps above.

<br> 

## 🧪 Project Structure
- `cypress/e2e/failing-tests.cy.js` – Tests which result in failures
- `cypress/e2e/passing-tests.cy.js` – Tests which pass
- `cypress/e2e/challenge-manual.cy.js` – Answers to email questions inc. manual testing bug reports

<br> 

## Cypress Version

- Cypress v14.3.3 or above is used in this repository.
- Installed version can also be checked within `package.json`

<br> 

## 🛠️ Troubleshooting
- If Cypress doesn't open or runs into issues, try clearing the cache:
   ```
   npx cypress cache clear
- If you're facing issues with Node.js, ensure you’re using the supported version (14.x or above).

<br> 

## 📦 Packages used in this repository & setup note
### start-server-and-test
Used to run the local web app that Cypress uses in this project. Allows the development server to be started, waits for it to be available and then runs Cypress tests

```bash
npm install --save-dev start-server-and-test
```

## 🚀 Notes

- All tests target localhost `http://localhost:5173/`

Happy Testing! 🚀




