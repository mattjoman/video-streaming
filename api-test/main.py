import requests
import json


#API_URL = "http://localhost:3000"
API_URL = "https://b12t07s4xa.execute-api.eu-west-1.amazonaws.com" # dev
#API_URL = "https://1s8iexdsog.execute-api.eu-west-1.amazonaws.com" # prod


def generate_mission(n: int, r: int, location: list[float], tags: list[str], cptSource: str="database"):
    url = f"{API_URL}/checkpoints/generate-mission"
    body = {
        "name": "",
        "n": n,
        "r": r,
        "location": {
            "type": "Point",
            "coordinates": location
        },
        "tags": tags,
        "cptSource": cptSource
    }
    response = requests.post(url, json=body)
    return response.json()


def generate_and_save_mission():
    mission = generate_mission(n=2, r=0.1, location=[-0.086, 51.518], tags=[])
    mission["config"]["name"] = 'testName'

    url = f"{API_URL}/missions"
    response = requests.post(url, json=mission)
    print(response.json())
    print(response.status_code)


if __name__ == "__main__":
    print(generate_mission(n=2, r=100, location=[-0.086, 51.518], tags=[]))
    #generate_and_save_mission()
