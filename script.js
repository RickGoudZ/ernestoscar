console.log('requesting...')

let req = new XMLHttpRequest();

req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
        console.log("Request Done..");
        var data = JSON.parse(req.responseText);
        console.log(data);
        console.log(data['record']["content"])
        var json = data['record']["content"];
        var counter = 0;
        var array = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44]
        for (let i = 0; i < data.record.content.name.length; i++) {

            var clone = document.getElementById('clone');
            var cloneto = document.getElementById('ads')
            clone_a = clone.cloneNode(true);
            clone_a.style.display = "block";
            if (array.includes(i) == true) {
                clone_a.firstElementChild.style.marginRight = "0px";
            }
            //
            clone_a.setAttribute("href", json["href"][i])
            clone_a.firstElementChild.firstElementChild.src =  json["img"][i];
            clone_a.firstElementChild.children[1].innerHTML = json['name'][i];
            clone_a.firstElementChild.children[2].innerHTML = json["date"][i];
            clone_a.firstElementChild.children[3].innerHTML = json["added"][i];
            clone_a.firstElementChild.children[4].innerHTML = json["price"][i];
            //     
            cloneto.appendChild(clone_a)
        }}
  };
  
  req.open("GET", "https://api.jsonbin.io/v3/b/60f1e6e3a917050205c90846", true);
  req.setRequestHeader("X-Master-Key", "$2b$10$hGmNQIDEGHH12i4HCPqSY.VdijWoHZpQ83lnsnNG2QTB4heM/HMZO");
  req.send();




$( "#readmore" ).click(function() {
    $(this).remove()
    var text = $("#hiddentext").html()
    $("#into_p").html(text);
    var height = $("#intro").height();
    height += 45;
    $("#intro").height(height)
  });