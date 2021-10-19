const { generateReadme, generateContributersArray } = require("./utils/generateReadme.js");
const { readmeTemplate } = require("./src/readmeTemplate.js");
const inquirer = require("inquirer");

const promptQuestionsP1 = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project title.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Write a breif description about your project: ",
    },
    {
      type: "input",
      name: "installationDesc",
      message: "Write a brief description for the installation process: ",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage of this project?",
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
