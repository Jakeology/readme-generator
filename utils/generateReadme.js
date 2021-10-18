const fs = require("fs");

const generateReadme = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", fileContent, (err) => {
      
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "README has been created!",
      });
    });
  });
};

module.exports = {generateReadme};
