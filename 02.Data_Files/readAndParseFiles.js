import fs from "fs";
import yaml from "js-yaml";
import { XMLParser } from "fast-xml-parser";
import csv from "csv-parser";

export function readJSON(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
}

export function readYAML(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return yaml.load(fileContent);
}

export function readXML(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const parser = new XMLParser();
  return parser.parse(fileContent);
}

export async function readCSV(filePath) {
  const results = [];
  const stream = fs.createReadStream(filePath).pipe(csv());

  for await (const data of stream) {
    results.push(data);
  }

  return results;
}

export function readTextFile(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return { text: fileContent };
}
