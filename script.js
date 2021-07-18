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
            clone_a.className = "clone";
            //
            clone_a.setAttribute("href", json["href"][i])
            clone_a.firstElementChild.firstElementChild.src =  json["img"][i];
            clone_a.firstElementChild.children[1].innerHTML = json['name'][i];
            clone_a.firstElementChild.children[2].innerHTML = json["date"][i];
            clone_a.firstElementChild.children[3].innerHTML = json["added"][i];
            clone_a.firstElementChild.children[4].innerHTML = json["price"][i];
            //     
            cloneto.appendChild(clone_a)
        }
        clone.parentElement.removeChild(clone);}
        arange()
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


function arange() {
  if ($(window).width() < 1590) {
    var array2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41]
    var divs = document.getElementsByClassName("clone");
    for (let u = 0; u < divs.length; u++) {
        if (array2.includes(u) == true) {
            divs[u].firstElementChild.style.marginRight = "0px"; 
        }
        else {
          divs[u].firstElementChild.style.marginRight = "12.5%";
          divs[u].firstElementChild.style.marginLeft = "15%";
        }
    }
} else {
      var array = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44]
      var divs = document.getElementsByClassName("clone");
      for (let u = 0; u < divs.length; u++) {
          if (array.includes(u) == true) {
              divs[u].firstElementChild.style.marginRight = "0px"; 
          }
          else {
              divs[u].firstElementChild.style.marginRight = "12.5%";
          }
      }
    }};
  
  $(window).on('resize', function() {
          if ($(window).width() < 1590) {
              var array2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41]
              var divs = document.getElementsByClassName("clone");
              for (let u = 0; u < divs.length; u++) {
                  if (array2.includes(u) == true) {
                      divs[u].firstElementChild.style.marginRight = "0px"; 
                  }
                  else {
                    var widthcfs = $("#carsforsale").width()
                    var widthborder = $(".border").width()
                    var procentage = (widthcfs - (2 * widthborder)) / 3
                    console.log("procentage", procentage);
                    divs[u].firstElementChild.style.marginLeft = procentage + "px";
                    divs[u].firstElementChild.style.marginRight = procentage + "px";
                  }
              }
          } else {
                var array = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44]
                var divs = document.getElementsByClassName("clone");
                for (let u = 0; u < divs.length; u++) {
                    if (array.includes(u) == true) {
                        divs[u].firstElementChild.style.marginRight = "0px";
                        divs[u].firstElementChild.style.marginLeft = "0%"; 
                    }
                    else {
                        divs[u].firstElementChild.style.marginRight = "12.5%";
                        divs[u].firstElementChild.style.marginLeft = "0%";
                    }
                }
            }});