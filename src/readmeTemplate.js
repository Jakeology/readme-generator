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

## Usage

${projectData.usage}

## License

This project is licensed under the ${projectData.license} license.
`;
}

module.exports = { readmeTemplate };
