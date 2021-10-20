const fs = require("fs");

const generateReadme = (fileContent) => {
  return new Promise((resolve, reject) => {

    //Check for existing dist folder, if false create one
    const dir = "./dist";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {
        recursive: true,
      });
    }

    //Create readme file
    fs.writeFile("./dist/README.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "README has been created and outputted to ~/dist/README.md",
      });
    });
  });
};

function generateArray(string) {
  let user = string.split(", ").join(",");
  let namesArr = user.split(",");
  return namesArr;
}

module.exports = { generateReadme, generateArray };
