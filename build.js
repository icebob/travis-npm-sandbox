const fs = require("fs");
const pkg = require("./package.json");

const fName = "./CHANGELOG.md";

let content = fs.readFileSync(fName, "utf8");
content += `Version: ${pkg.version} - ${new Date().toISOString()}\n`;

fs.writeFileSync(fName, content, "utf8");

console.log("Done!");

console.log(content, "\n");