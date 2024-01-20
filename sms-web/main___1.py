from typing import Annotated
import uvicorn


from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm
from pydantic import BaseModel

fake_users_db = {
    "phone1": {
        "phone": "phone1",
        'name': 'user1',
    },
    "phone2": {
        "phone": "phone2",
        'name': 'user2',
    },
}

fake_code = {
    "123456789": {
        "code": "123456",
    },
    "123456789": {
        "code": "123456",
    },

}


app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

class User(BaseModel):
    name: str
    password: str

class UserInDB(User):
    password: str

def get_user(db,username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)

def fake_hash_password(password: str):
    return password

def fake_decode_token(token):
    user = get_user(fake_users_db, token)
    return user

async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    user = fake_decode_token(token)
    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user

async def get_current_active_user(
    current_user: Annotated[User, Depends(get_current_user)]
):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user

print('start')

@app.post("/token")
async def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
    print("form_data", form_data)
    user_dict = fake_users_db.get(form_data.username)
    if not user_dict:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    user = UserInDB(**user_dict)
    hashed_password = fake_hash_password(form_data.password)
    print("hashed_password", hashed_password)
    if not hashed_password == user.password:
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    return {"access_token": user.name, "token_type": "bearer"}

@app.get("/users/me")
async def read_users_me(current_user: Annotated[User, Depends(get_current_user)]):
    return current_user

@app.get("/")
def read_root():
    return {"Hello": "World"}

# login post api
@app.post("/login")
def login(name: str, password: str):
    return {"login": "success", "name": name, "password": password}


@app.get("/items/")
async def read_items(token: Annotated[str, Depends(oauth2_scheme)]):
    return {"token": token}

if __name__ == "__main__":
    uvicorn.run("main:app", port=5000, log_level="info")