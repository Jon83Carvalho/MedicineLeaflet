from fastapi import FastAPI
import requests
import os
import pandas as pd
import json
from typing import Union

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:8081",
    "http://localhost:9000",
    "http://localhost",
    "http://192.168.15.6:19006",
    "http://localhost:19006",
    "http://www.datandart.com"	
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_item(drug_name: Union[str, None] = None):
    print("hello")
    if (drug_name):
        url="https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name="+drug_name
        print(url)
    else:
        url="https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?"
    

    res =requests.get(url)
    resdict=dict(res.json())['data']
    
    print(list(resdict))
    return {'data':resdict}
@app.get("/spls/")
def read_item(setid: Union[str, None] = None):
    print("XML Doc")
    if (setid):
        url="https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/"+setid+".xml"
        print(url)
    else:
        url="https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?"
    

    res =requests.get(url)
    
    return {'data':res.text}
