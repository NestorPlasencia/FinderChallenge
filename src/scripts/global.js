// Lectura, rendereo y listado de sugerencias 

let JSON_FILE = "books-schema.json"

let loadJSON = function(url, callback){
    var xobj = new XMLHttpRequest()
    xobj.overrideMimeType("application/json")
    xobj.open("GET", url, true)
    xobj.onreadystatechange = function(responseText){
        if(xobj.readyState == 4 && xobj.status == "200"){
            var content = JSON.parse(xobj.responseText)
            callback.call(this, content)
        }
    }
    xobj.send(null)
}
loadJSON(JSON_FILE,function(data,response) {
    globalData = data.data
    renderItems()
    listTitles()
})

var globalData = []
var content = document.getElementById("content")
var input = document.getElementById("search")
var submit = document.getElementById("submit")

//Numero maximo de items iniciales
var maxItems = 9

function renderItems() {
    let elements = globalData.filter((item,ind) => ind < maxItems )
    elements.forEach( element => {
        content.appendChild(createCard(element))
    })
}

function listTitles() {
    let titles = []
    globalData.forEach( item => {
       titles.push(item.title) 
    })
    new Awesomplete(input, {
        list: titles,
        minChars: 3,
        maxItems: 7,
    })
}

function deletedItems() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
} 

function createCard(element) {

    let card = document.createElement("DIV")
    card.className = "card"
    
    let img = document.createElement("IMG")
    img.className = "item-img"
    img.src = element.image
    
    let title = document.createElement("H3")
    title.className = "item-img"
    title.innerText  = element.title 
    
    let description = document.createElement("P")
    description.className = "item-description"
    description.innerText  = element.teaser 
    
    card.appendChild(img)
    card.appendChild(title)
    card.appendChild(description)
    
    return card
}