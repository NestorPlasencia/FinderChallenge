search.addEventListener("keyup", buttonStatus)
submit.addEventListener("click", searchForm)

function buttonStatus() {
	if (search.value.length >= 2 ) {
		submit.disabled = false 
	}else {
		submit.disabled = true
		deletedItems()
		renderItems()
	}
}

function enterPress(event) {
	var key = event.keyCode;
	if (key == 13 && submit.disabled == false ) {
		let lista = document.querySelectorAll("#awesomplete_list_1 li")
		let flag = false
		lista.forEach(item => {
			if(item.attributes['aria-selected'].value == 'true') {
				flag = true
			}
		})	
		flag == true ?	setTimeout(function(){ searchForm() }, 500) : searchForm()	
	}
}