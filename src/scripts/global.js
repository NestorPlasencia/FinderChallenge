/*Lectura y rendereo de items */

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

/*Variable Globales*/

var content = document.getElementById("content")
var input = document.getElementById("search")
var submit = document.getElementById("submit")
var prev = document.getElementById("prev")
var next = document.getElementById("next")
var globalData = []
var filterData = []
var iInitial = 0
var iFinal = 8

/*Funcion encargada de dividir los listados de 9 en 9*/
function pageFilter(items){
    let numerPage = Math.ceil(items.length/9)
    iInitial == 0 ? prev.classList.add("hide-link") : prev.classList.remove("hide-link")
    iFinal == numerPage*9 - 1 ? next.classList.add("hide-link") : next.classList.remove("hide-link")
    /*Listar los primeros 9 items */
    let elements = items.filter((item,ind) => iInitial <= ind && ind <= iFinal )
    renderItems(elements)
}

/*Funcion para renderear items*/
function renderItems(items) {
    deletedItems()
    items.forEach( item => {
        content.appendChild(createCard(item))
    })
}

/*Funcion para listar los titulos en las sugerencias*/
function listTitles(items) {
    let titles = []
    items.forEach( item => {
       titles.push(item.title) 
    })
    /*Debe permitir autocompletar el título de un libro a buscar a partir del 3er caracter,
    y las 7 posibilidades debe mostrar como máximo*/
    new Awesomplete(input, {
        list: titles,
        minChars: 3,
        maxItems: 7,
    })
}

/*Funcion para eliminar todos items*/
function deletedItems() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
} 

/*Funcion para crear items a ser ingresados al DOM*/
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