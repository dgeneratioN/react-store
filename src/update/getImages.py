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
    payload = f"fields slug, platforms, screenshots; search \"{game_name}\"; where platforms=(4); limit 1;"
    response = requests.request("POST", url, headers=headers, data=payload)
    id = json.loads(response.text)[0]["id"]
    print(f"Capturei o {game_name}: {id}")

    url = "https://api.igdb.com/v4/screenshots"
    payload = f"fields url; where game={id};"
    response = requests.request("POST", url, headers=headers, data=payload)
    sslist = []
    for ss in response.json():
        current_ss = ss['url'].split("/")
        current_ss = current_ss[len(current_ss) - 1]
        sslist.append(current_ss)
        print(f"adicionei {current_ss}")
    return sslist


def escrever():
    f = open("data.json",'r')
    data = json.load(f)
    f.close()
    for i in data:
        i["Screenshots"] = getGame(i["Game"])
        print(i["Screenshots"])
        time.sleep(1)
    f = open("data.json",'w')
    json.dump(data, f, indent=2)
    f.close()

escrever()
