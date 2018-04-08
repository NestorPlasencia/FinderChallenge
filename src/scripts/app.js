search.addEventListener("keyup", buttonStatus)
submit.addEventListener("click", searchForm)
next.addEventListener("click", nextItems)
prev.addEventListener("click", prevItems)

/* Evento para modificar el bloqueo del boton buscar */
function buttonStatus() {
	/*Debe habilitarse el botón de búsqueda cuando se ingrese texto con una 
	cantidad mayor a dos caracteres en el campo de búsqueda.*/
	if (search.value.length >= 2 ) {
		submit.disabled = false 
	}else {
		submit.disabled = true
		filterData = globalData
		pageFilter(filterData)
	}
}

/* Evento de presionar la tecla enter*/
function enterPress(event) {
	var key = event.keyCode;
	/*Debe realizar la funcionalidad de búsqueda una vez presionado la tecla enter. Dicha 
	funcionalidad debe realizarse, si el botón buscar e​stá habilitado*/
	if (key == 13 && submit.disabled == false ) {
		let lista = document.querySelectorAll("#awesomplete_list_1 li")
		let flag = false
		lista.forEach(item => {
			item.attributes['aria-selected'].value == 'true' ? flag = true : null
		})	
		flag == true ?	setTimeout(function(){ searchForm() }, 500) : searchForm()	
	}
}

/* Funciones para paginar */

function nextItems() {
	iInitial = iInitial + 9
	iFinal = iFinal + 9
	pageFilter(filterData)
}

function prevItems() {
	iInitial = iInitial - 9
	iFinal = iFinal - 9
	pageFilter(filterData)
}