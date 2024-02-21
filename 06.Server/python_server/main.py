from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {"message": "Hello World"}


@app.get("/firstroute")
def firstroute():
    return {"message": "This is the first route"}
