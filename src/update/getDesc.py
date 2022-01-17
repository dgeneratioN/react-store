import requests
import time
import json

authorization_str = "Bearer (hash)"

def getGame(game_name):
    headers = {
        'Client-ID': 'ckps9headl503enc1lwzkt457rieiy',
        'Authorization': authorization_str,
        'Content-Type': 'text/plain'
    }

    url = "https://api.igdb.com/v4/games"
    payload = f"fields summary; search \"{game_name}\"; where platforms=(4); limit 1;"
    response = requests.request("POST", url, headers=headers, data=payload)
    id = json.loads(response.text)[0]["id"]
    print(f"Capturei o {game_name}: {id}")

    return(response.json()[0]["summary"])


def escrever():
    f = open("data.json",'r')
    data = json.load(f)
    f.close()
    for i in data:
        i["summary"] = getGame(i["Game"])
        time.sleep(1)
    f = open("data.json",'w')
    json.dump(data, f, indent=2)
    f.close()

escrever()
