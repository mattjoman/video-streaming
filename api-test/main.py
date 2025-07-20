import requests as r
import json

def generate_mission(n: int, tags: list[str]):
    url = "http://localhost:3000/checkpoints/generate-mission"
    body = {
        "n": n,
        "r": 5,
        "location": [-0.086, 51.518],
        "tags": tags
    }
    response = r.post(url, json=body)
    return response.json()

if __name__ == "__main__":
    print(generate_mission(2, ["nature"]))