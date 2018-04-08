function searchForm(){
	str = search.value.toLowerCase()
	deletedItems() 
	let findItems = globalData.filter( item => item.title.toLowerCase().includes(str) )
	let onlyNine =	 findItems.filter((item,ind) => ind < 9 )
	onlyNine.forEach( element => {
        content.appendChild(createCard(element))
    })
}