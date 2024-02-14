import express from "express";
import {
  readJSON,
  readYAML,
  readXML,
  readCSV,
  readTextFile,
} from "./readAndParseFiles.js";
const app = express();

app.get("/json", (req, res) => {
  const jsonFilePath = "me.json";
  const jsonData = readJSON(jsonFilePath);
  res.send(jsonData);
});

app.get("/yaml", (req, res) => {
  const yamlFilePath = "me.yaml";
  const yamlData = readYAML(yamlFilePath);
  res.send(yamlData);
});

app.get("/xml", (req, res) => {
  const xmlFilePath = "me.xml";
  const xmlData = readXML(xmlFilePath);
  res.send(xmlData);
});

app.get("/txt", (req, res) => {
  const plainTextFilePath = "me.txt";
  const plainTextData = readTextFile(plainTextFilePath);
  res.send(plainTextData);
});

app.get("/csv", async (req, res) => {
  try {
    const csvFilePath = "me.csv";
    const csvData = await readCSV(csvFilePath);
    res.send(csvData);
  } catch (error) {
    res.status(500).json({ error: "Error reading CSV file" });
  }
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
