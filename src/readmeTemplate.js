function readmeTemplate(projectData) {
  return `
# ${projectData.title}
    
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
`;
}

module.exports = { readmeTemplate };
