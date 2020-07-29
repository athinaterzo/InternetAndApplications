#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Jul 28 17:21:52 2020

@author: athina
"""


import json 
import xmltodict
from pymongo import MongoClient
  
  
# open the input xml file and read 
# data in form of python dictionary  
# using xmltodict module 


f = open("NCT00000102.xml", "r")
xml = f.read()




my_dict=xmltodict.parse(xml)

print(my_dict['clinical_study'])


#json_data=json.dumps(my_dict)

#client = MongoClient('localhost', 27017)
#db = client['test']
#collection_currency = db['TestV2']




# if pymongo >= 3.0 use insert_one() for inserting one document
#collection_currency.insert_one(my_dict)


#client.close()