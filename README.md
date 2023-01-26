# First Playwright Project using JavaScript

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Playwright](https://img.shields.io/badge/playwright-%797979.svg?style=for-the-badge&logo=playwright&logoColor=white)

Read the complete Blog - [Playwright Testing using JavaScript – Setup](https://testingwithsk.in/playwright-testing-using-javascript-setup/)

This new year, I am going to start with a new automation tool – Microsoft Playwright. In this article, we will learn about playwright testing. Playwright is the newest addition to the Headless Browser Testing Frameworks which is developed by the authors of Puppeteer and maintained by Microsoft. Playwright is an open-source web automation library, built on top of Puppeteer. In this article, we look into a web automation framework created with Playwright and Java Script.

### Clone the repository

```shell
git clone https://github.com/TestingWithSK/first-playwright-project.git
```

### Or Create a playwright project from scratch
```shell
npm init playwright@latest
```

### Run the Playwright Test
To execute the tests, open the terminal and type the following commands -

- [x] **Run all the tests**
```shell
npm playwright test
```

- [x] **Run a single test file**
```shell
npx playwright test example.spec.js
```

- [x] **Run a set of test files**
```shell
npx playwright test tests/dir_1 tests/dir_2
```

- [x] **Run tests in Headed mode**
```shell
npx playwright test --headed
```

- [x] **Run the test in a specific Project (Browser)**
```shell
npx playwright test --project=firefox
```

- [x] **Run the test with the Title**
```shell
npx playwright test -g "Your Test Title"
```

- [x] **Run all the files that have `file1` and `file2` in the file name**
```shell
npx playwright test file1 file2
```

- [x] **Disable Parallel Execution**
```shell
npx playwright test --workers=1
```

### Debug the Playwright Test
To debug the tests, open the terminal and type the following commands -

- [x] **Debug all the tests**
```shell
npm playwright test --debug
```

- [x] **Debug a single test file**
```shell
npx playwright test example.spec.js --debug
```

Read the complete Blog - [Playwright Testing using JavaScript – Setup](https://testingwithsk.in/playwright-testing-using-javascript-setup/)

Happy Testing!!!

---

### Read More Articles
[![Testing Blog](https://img.shields.io/badge/-TestingWithSK-21759B?logo=wordpress&logoColor=white)](https://testingwithsk.in)

### Follow us on Social Media Accounts
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/shubhamkgupta14) [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/testingwithsk) [![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/testingwithsk)