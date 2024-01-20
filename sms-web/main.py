
from datetime import datetime

import uvicorn
from fastapi import FastAPI
from fastapi.responses import JSONResponse

from pymongo.mongo_client import MongoClient

# 数据库地址
uri = "mongodb://localhost:27017/"

# 链接到数据库
client = MongoClient(uri)

# 访问数据库
db = client["test-database"]
# 查看有哪些集合
collection_name = db.list_collection_names()
print(collection_name)
# 访问某个集合
collection = db.test_collection

app = FastAPI()

print("start")
@app.get("/")
def read_root():
    return {"Hello": "World1","db":collection_name}

@app.get('/insert')
def insert():
    # 插入一条数据：名字，手机号，年龄，创建时间:时间戳
    collection.insert_one({'name':'test','age':18,'phone':'12345678901','create_time':datetime.utcnow()})
    print('insert success')
    return 'insert success'

if __name__ == "__main__":
    uvicorn.run("main:app", port=3001, log_level="info")

@app.get('/find')
def find():
    # 查询一条数据
    print('find success',collection.find_one())
    result = collection.find_one()
    result["_id"] = str(result["_id"])
    result['create_time'] = result.get("create_time").isoformat() if result.get("create_time") else None
    data = {
        "code": 200,
        "msg": "success",
        "data": result
    }

    return JSONResponse(content=data,headers={"Content-Type": "application/json"})