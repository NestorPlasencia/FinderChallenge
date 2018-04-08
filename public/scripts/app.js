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

function uniKeyCode(e) {
	var key = event.keyCode;
	if (key == 13 && submit.disabled == false ) {
		searchForm()
	}
}