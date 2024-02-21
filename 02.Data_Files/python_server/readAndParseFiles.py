import xml.etree.ElementTree as ET
import csv
import yaml
import json


# XML Parser
def parse_xml_file(file_path):
    tree = ET.parse(file_path)
    root = tree.getroot()
    xml_dict = {}
    for child in root:
        if len(child) > 0:
            xml_dict[child.tag] = {item.tag: item.text for item in child}
        else:
            xml_dict[child.tag] = child.text
    return xml_dict


# CSV Parser
def parse_csv_file(file_path):
    with open(file_path, newline="") as csvfile:
        reader = csv.DictReader(csvfile)
        csv_data = [row for row in reader]
    return csv_data


# YAML Parser
def parse_yaml_file(file_path):
    with open(file_path, "r") as yaml_file:
        data = yaml.safe_load(yaml_file)
    return data


# JSON Parser
def parse_json_file(file_path):
    with open(file_path, "r") as json_file:
        data = json.load(json_file)
    return data


# Text Parser
def parse_text_file(file_path):
    dict_data = {}
    with open(file_path, "r") as file:
        for line in file:
            if ": " in line:
                key, value = line.split(": ", 1)
                dict_data[key.strip()] = value.strip()
    return dict_data
