import requests
import json

def generate_mission(name: str, n: int, r: int, location: list[float], tags: list[str], cptSource: str="database"):
    url = "http://localhost:3000/checkpoints/generate-mission"
    body = {
        "name": name,
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
    mission = generate_mission(name="test", n=2, r=1, location=[-0.086, 51.518], tags=[])
    mission["config"]["name"] = 'testName'
    print(json.dumps(mission, indent=4))

if __name__ == "__main__":
    generate_and_save_mission()
