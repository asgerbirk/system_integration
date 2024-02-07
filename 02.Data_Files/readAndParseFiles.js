const fs = require("fs");
//JSON----------------------------------------------------------------------------------------
const jsonFilePath = `${__dirname}/me.json`;
const jsonFileContent = fs.readFileSync(jsonFilePath, "utf-8");

const jsonFile = JSON.parse(jsonFileContent);

console.log(jsonFile);
// YAML --------------------------------------------------------------------------------------
const yaml = require("js-yaml");

const yamlFilePath = `${__dirname}/me.yaml`;

const readFile = fs.readFileSync(yamlFilePath, "utf8");

const yamlFile = yaml.load(readFile);

console.log(yamlFile);

//XML ----------------------------------------------------------------------------------------

const { XMLParser } = require("fast-xml-parser");

const xmlFilePath = `${__dirname}/me.xml`;

const xmlContent = fs.readFileSync(xmlFilePath, "utf8");

const parser = new XMLParser();

const xmlFile = parser.parse(xmlContent);

console.log(xmlFile);

const hobbiesArray = xmlFile.me.hobbies.hobby;
console.log("Hobbies Array:");
console.log(hobbiesArray);

//CSV ----------------------------------------------------------------------------------------
const csv = require("csv-parser");
const results = [];

const csvFilePath = `${__dirname}/me.csv`;

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    console.log(results);
  });
