#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jul 29 11:50:52 2020

@author: athina
"""

import xml.etree.ElementTree as ET
from pymongo import MongoClient
import os

def parseXML(directory, file):
    print(file)
    
    tree = ET.parse(os.path.join(directory, file))
    root = tree.getroot()
    
    data = dict()
    
    
    condition    = []
    intervention = []
    
    
    for elem in root.iter():
        if(elem.tag in fields):
            if elem.tag == 'brief_summary' or elem.tag == 'criteria':
                data[elem.tag] = elem[0].text
            elif elem.tag == 'intervention':
                intervention.append({elem[0].tag : elem[0].text, elem[1].tag : elem[1].text})
            elif elem.tag == 'condition':
                condition.append({'cond_name':elem.text})
            elif elem.tag == 'facility':
                if elem.find('./name'):
                    data['facility_name'] = elem.find('./name').text
                if elem.find('./address/country'):
                    data['country'] = elem.find('./address/country').text 
            else:
                data[elem.tag] = elem.text
                
    data['condition']    = condition
    data['intervention'] = intervention
    
    return data


fields = set(['nct_id', 'brief_title','brief_summary', 'intervention', 'condition','criteria', 'facility','status' ])

client = MongoClient('localhost', 27017)
db = client['clinicalTrials']
collection = db['trialData']


directory = './dataset/AllPublicXML'

for folder in os.listdir(directory):
    if folder.endswith(".txt"):
        continue
    for filename in os.listdir(os.path.join(directory, folder)):
        
        data = parseXML(directory+'/'+folder,filename)
        collection.insert_one(data)




#if pymongo >= 3.0 use insert_one() for inserting one document
#collection.insert_one(data)





client.close()