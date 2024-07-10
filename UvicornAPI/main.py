from fastapi import FastAPI
import redis
import os
import pandas as pd
import json

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:8081",
    "http://localhost",
    "http://localhost:3000",
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

REDIS_PASSW=os.environ.get('REDIS_PASSW')

@app.get("/")
def hello_root():
    r = redis.Redis(
    host='redis-16660.c85.us-east-1-2.ec2.redns.redis-cloud.com',
    port=16660,
    password=REDIS_PASSW)

    #storing data per type
    keys=r.keys('*')

    #price_data
    keys_price=list(filter(lambda key: str(key).find("{")>=0,keys))
    values_price=r.mget(keys_price)
    price_df=pd.DataFrame({'coin':[json.loads(p_data)['coin'] for p_data in keys_price],'keys_price':keys_price,'data_price':values_price})


    #count_data
    keys_count=list(filter(lambda key: str(key).find("{")==-1,keys))
    values_count=r.mget(keys_count)
    count_df=pd.DataFrame({'coin':keys_count,'count':[json.loads(c_data)['Count'] for c_data in values_count],'data_count':values_count})
    count_df_filtered=count_df.loc[count_df['count']>count_df.sort_values(by='count',ascending=False).iloc[20]['count']]

    #price filtered data
    price_df_filtered=price_df[price_df.coin.isin([coin_b.decode('utf-8') for coin_b in count_df_filtered['coin']])]


   
    trade_data = [{price_df_filtered.iloc[i]['keys_price'].decode("utf-8"): price_df_filtered.iloc[i]['data_price'].decode("utf-8")} for i in range(len(price_df_filtered['coin']))]
    
   
   
    count_data=[{count_df_filtered.iloc[i]['coin'].decode("utf-8"): count_df_filtered.iloc[i]['data_count'].decode("utf-8")} for i in range(len(count_df_filtered['coin']))]
    res={"count":count_data,"trade_data":trade_data}

    print("res",res)
    return res
