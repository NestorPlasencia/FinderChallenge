/* Funcion para buscar coincidencias */

function searchForm(){
	str = search.value.toLowerCase()
	/*Mostrar en la sección resultados de búsqueda, los items que coincidan en parte o 
	todo el título en base al texto ingresado en el campo de búsqueda.*/
	let findItems = globalData.filter( item => item.title.toLowerCase().includes(str) )
	filterData = findItems
	pageFilter(filterData)
}