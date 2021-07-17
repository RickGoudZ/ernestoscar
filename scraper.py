import json
from bs4 import BeautifulSoup
import requests
import re


try:
    HEADERS = ({'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36',
                'Accept-Language': 'en-US, en;q=0.5'})


    url = 'https://www.classicnumber.com/les-professionnels-details.php?id=2087'
    req = requests.get(url, headers=HEADERS, timeout=5)
    soup = BeautifulSoup(req.content, features="lxml")
    ul = soup.findAll("ul", {"class":"searchList cargrid row"})

    content = {"content": {"name": [], "price": [], "date": [], "milage": [], "added": [], "img": [], "href": []}}

###-name
    for tag in ul:
        tdTags = tag.find_all("a", {"class":"carhit"})
        for tag in tdTags:
            if tag.text != '':
                print (tag.text)
                content["content"]["name"].append(tag.text)
###-price
    for tag in ul:
        tdTags = tag.find_all("div", {"class":"adprice"})
        for tag in tdTags:
            if tag.text != '':
                print (tag.text)
                content["content"]["price"].append(str(tag.text).replace(" ", " ").replace(" ", " "))
###-date
    for tag in ul:
        tdTags = tag.find_all("ul", {"class":"car-list-infos-1"})
        for tag in tdTags:
            if tag.text != '':
                print (tag.text)
                split = str(tag.text).replace(" ", "").split('\n')
                del split[0]
                print(split)
                content["content"]["date"].append(split[0])
                content["content"]["milage"].append(split[1])
###-added
    for tag in ul:
        tdTags = tag.find_all("div", {"class":"car_info_date"})
        for tag in tdTags:
            if tag.text != '':
                print (str(tag.text).replace("\t\t\t\t\t\t\t\t\t\t", "").replace("\t", " "))
                content["content"]["added"].append(str(tag.text).replace("\t\t\t\t\t\t\t\t\t\t", "").replace("\t", " "))
###-img
    for tag in ul:
            for link in tag.find_all("img", {"class":"img img-responsive"}):
                imgsrc = "https://www.classicnumber.com/" +str(link.get('style')).replace("background-image: url(", "").replace(")", "")
                print(link.get('style'))
                content["content"]["img"].append(imgsrc)
###-href
    c= 0
    for tag in ul:
            for link in tag.find_all("a", {"class":"carhit"}):
                if c == 0:
                    href = "https://www.classicnumber.com/" + str(link.get('href'))
                    print(link.get('href'))
                    content["content"]["href"].append(href)
                    c = 1
                else:
                    c = 0
###
except:
    print("error")

print(str(content).replace("'", '"'))


url = 'https://api.jsonbin.io/v3/b/60f1e6e3a917050205c90846'
headers = {
  'Content-Type': 'application/json',
  'X-Master-Key': '$2b$10$hGmNQIDEGHH12i4HCPqSY.VdijWoHZpQ83lnsnNG2QTB4heM/HMZO'
}
data = json.loads(str(content).replace("'", '"'))
print(type(data))
req = requests.put(url, json=data, headers=headers)
print(req.text)



k=input("press enter to exit") 