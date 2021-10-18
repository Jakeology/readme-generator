const { generateReadme } = require("./utils/generateReadme.js");
const { readmeTemplate } = require("./src/readmeTemplate.js");
const inquirer = require("inquirer");

const promptQuestions = () => {
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
  ]);
};

promptQuestions()
  .then((readmeData) => {
    return readmeTemplate(readmeData);
  })
  .then((file) => {
    return generateReadme(file);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  });
