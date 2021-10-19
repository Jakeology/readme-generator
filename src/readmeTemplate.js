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
`;
}

function getContributers(userArray) {
  return `${userArray.join("\n")}`;
}

function getSym(num) {
  let sym = "";
  for(let i = 0; i < num; i++) {
    sym += "`";
  }
  return sym;
}

module.exports = { readmeTemplate };
