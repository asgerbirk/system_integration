from fastapi import FastAPI
import requests

app = FastAPI()

# dict eksempel og hvorfor det ikke er json, fordi man kan få adgang
my_dict = {"message": [1, 2, 3, 4, 5]}
print(my_dict["message"])


@app.get("/fastapiData")
def serve_data():
    return {
        "Data": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
        ]
    }


@app.get("/requestExpress")
def get_express_data():
    response = requests.get("http://localhost:8080/expressData")
    result = response.json()

    return {"Data": result}
