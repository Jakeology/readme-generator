const { generateReadme, generateContributersArray } = require("./utils/generateReadme.js");
const { readmeTemplate } = require("./src/readmeTemplate.js");
const inquirer = require("inquirer");

const promptQuestionsP1 = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("\nPlease enter your project title.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Write a breif description about your project: ",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("\nPlease enter a breif description about your project.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installationDesc",
      message: "Write a brief description for the installation process: ",
      validate: (installDescInput) => {
        if (installDescInput) {
          return true;
        } else {
          console.log("\nPlease enter a breif description about your projects installation process.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage of this project?",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("\nPlease enter the usage of your project.");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "Please choose a license for your project: ",
      choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Who are the contributors of this project?(Use commas to separate the names)",
      validate: (contributingInput) => {
        if (contributingInput) {
          return true;
        } else {
          console.log("\nPlease enter the contributors of your project.");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "testConfirm",
      message: "Are there any test included in your project?",
      default: false,
    },
    {
      type: "input",
      name: "test",
      message: "Write a brief description for the test process:",
      when: ({ testConfirm }) => {
        if (testConfirm) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "questions",
      message: "Write a brief description if users are having issues/questions",
      validate: (questionsInput) => {
        if (questionsInput) {
          return true;
        } else {
          console.log("\nPlease enter a brief description if users are having issues/questions.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your Github username",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("\nPlease enter a valid Github username.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your Email",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("\nPlease enter a valid Email.");
          return false;
        }
      },
    },
  ]);
};

promptQuestionsP1()
  .then((readmeData) => {
    readmeData.contributing = generateContributersArray(readmeData.contributing);
    console.log(readmeData);
    return readmeTemplate(readmeData);
  })
  .then((file) => {
    return generateReadme(file);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse.message);
  });
