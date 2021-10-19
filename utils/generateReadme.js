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

function generateContributersArray(usersString) {
  let user = usersString.split(", ").join(",");
  let namesArr = user.split(",");
  return namesArr;
}

module.exports = {generateReadme, generateContributersArray};
