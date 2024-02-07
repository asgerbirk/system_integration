# XML ----------------------------------------------------------------------------------------
import xml.etree.ElementTree as ET


tree = ET.parse("me.xml")
root = tree.getroot()
print("XML Data:")
for child in root:
    print(child.tag, child.text)
    if len(list(child)) > 0:
        for subChild in child:
            print(subChild.tag, subChild.text)


# CSV ----------------------------------------------------------------------------------------
import csv

with open("me.csv", newline="") as csvFile:
    reader = csv.reader(csvFile)
    print("CSV Data:")
    for row in reader:

        print(row)

# YAML ----------------------------------------------------------------------------------------

import yaml

with open("me.yaml", "r") as yamlFile:
    data = yaml.safe_load(yamlFile)
    print("YAML Data:")
    print(data)


# JSON  ----------------------------------------------------------------------------------------
import json

with open("me.json", "r") as jsonFile:
    data = json.load(jsonFile)
    print("JSON Data:")
    print(data)
