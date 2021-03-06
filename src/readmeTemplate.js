function readmeTemplate(projectData) {
  return `
# ${projectData.title}
![GitHub license](https://img.shields.io/badge/license-${projectData.license}-blue.svg)
    
## Description
${projectData.description}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${projectData.installationDesc}

## Usage
${projectData.usage}

## License
This project is licensed under the ${projectData.license} license.

## Contributing
${getContributers(projectData.contributing)}

## Tests
${getTests(projectData)}

## Questions
${projectData.questions}

Github: [${projectData.github}](https://github.com/${projectData.github})
Email: ${projectData.email}
`;
}

function getContributers(userArray) {
  return `${userArray.join("\n")}`;
}

function getTests(data) {
  if(data.testConfirm) {
    return data.test;
  } else {
    return `This project does not have any tests.`;
  }
}

module.exports = { readmeTemplate };
