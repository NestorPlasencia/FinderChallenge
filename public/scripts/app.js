search.addEventListener("keyup", buttonStatus)
submit.addEventListener("click", searchForm)
next.addEventListener("click", nextItems)
prev.addEventListener("click", prevItems)

function buttonStatus() {
	if (search.value.length >= 2 ) {
		submit.disabled = false 
	}else {
		submit.disabled = true
		filterData = globalData
		pageFilter(filterData)
	}
}

function enterPress(event) {
	var key = event.keyCode;
	if (key == 13 && submit.disabled == false ) {
		let lista = document.querySelectorAll("#awesomplete_list_1 li")
		let flag = false
		lista.forEach(item => {
			item.attributes['aria-selected'].value == 'true' ? flag = true : null
		})	
		flag == true ?	setTimeout(function(){ searchForm() }, 500) : searchForm()	
	}
}

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