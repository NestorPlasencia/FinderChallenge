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
    filterData = globalData
    pageFilter(filterData)
    listTitles(globalData)
})

var content = document.getElementById("content")
var input = document.getElementById("search")
var submit = document.getElementById("submit")
var prev = document.getElementById("prev")
var next = document.getElementById("next")
var globalData = []
var filterData = []
var iInitial = 0
var iFinal = 8

function pageFilter(items){
    let numerPage = Math.ceil(items.length/9)
    iInitial == 0 ? prev.classList.add("hide-link") : prev.classList.remove("hide-link")
    iFinal == numerPage*9 - 1 ? next.classList.add("hide-link") : next.classList.remove("hide-link")
    let elements = items.filter((item,ind) => iInitial <= ind && ind <= iFinal )
    renderItems(elements)
}

function renderItems(items) {
    deletedItems()
    items.forEach( item => {
        content.appendChild(createCard(item))
    })
}

function listTitles(items) {
    let titles = []
    items.forEach( item => {
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