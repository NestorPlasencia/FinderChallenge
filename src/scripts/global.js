/*
  constants and global functions
*/

var JSON_FILE = "books-schema.json";

/*
 @method loadJSON
 source: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/

var loadJSON = function(url, callback){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", url, true);
    xobj.onreadystatechange = function(responseText){
        if(xobj.readyState == 4 && xobj.status == "200"){
            var content = JSON.parse(xobj.responseText);
            callback.call(this, content);
        }
    };
    xobj.send(null);
};

var globalData = []
var content = document.getElementById("content")


loadJSON(JSON_FILE,function(data,response) {
    globalData = data.data;
    renderItems()
    listTitles()



});

function renderItems() {
    
    let elements = globalData.filter((item,ind) => ind < 9 )
    elements.forEach( element => {
        content.appendChild(createCard(element))
    })
}


function listTitles() {
    let titles = []
    globalData.forEach( item => {
       titles.push(item.title) 
    })
    var input = document.getElementById("search");
    new Awesomplete(input, {
        list: titles
    });
}


function createCard(element) {
    let card = document.createElement("DIV");
    card.className = "card";
    let img = document.createElement("IMG");
    img.className = "item-img"
    img.src = element.image;
    let title = document.createElement("H3");
    title.className = "item-img"
    title.innerText  = element.title 
    let description = document.createElement("P");
    description.className = "item-description"
    description.innerText  = element.teaser 
    card.appendChild(img)
    card.appendChild(title)
    card.appendChild(description)
    return card
}