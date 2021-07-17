console.log('requesting...')

let req = new XMLHttpRequest();

req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
        console.log("Request Done..");
        var data = JSON.parse(req.responseText);
        console.log(data);
        console.log(data['record']["content"])
        var json = data['record']["content"];
        for (let i = 0; i < data.record.content.name.length; i++) {

            var clone = document.getElementById('clone');
            var cloneto = document.getElementById('ads')
            clone_a = clone.cloneNode(true);
            clone_a.style.display = "block";
            //
            clone_a.firstElementChild.firstElementChild.src =  json["img"][i];
            clone_a.firstElementChild.children[1].innerHTML = json['name'][i];
            clone_a.firstElementChild.children[2].innerHTML = json["date"][i];
            clone_a.firstElementChild.children[3].innerHTML = json["added"][i];
            clone_a.firstElementChild.children[4].innerHTML = json["price"][i];
            console.log("json[\"price\"][2]", json["price"][2]);
            //     
            console.log(clone_a.firstElementChild.firstElementChild);
            cloneto.appendChild(clone_a)
        }
    }
  };
  
  req.open("GET", "https://api.jsonbin.io/v3/b/60f1e6e3a917050205c90846", true);
  req.setRequestHeader("X-Master-Key", "$2b$10$hGmNQIDEGHH12i4HCPqSY.VdijWoHZpQ83lnsnNG2QTB4heM/HMZO");
  req.send();