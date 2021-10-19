const { generateReadme } = require("./utils/generateReadme.js");
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
      message: "Write a breif description about your project.",
    },
    {
      type: "input",
      name: "installationDesc",
      message: "Write a brief description for the installation process:",
    },
  ]);
};

promptQuestionsP1()
  .then((readmeData) => {
    console.log(readmeData)
    return readmeTemplate(readmeData);
  })
  .then((file) => {
    return generateReadme(file);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse.message);
  });
