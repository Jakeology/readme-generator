function readmeTemplate(projectData) {
  return `
# ${projectData.title}
    
## Description
${projectData.description}
    
`;
}

module.exports = { readmeTemplate };
