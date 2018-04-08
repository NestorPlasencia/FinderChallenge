function searchForm(){
	str = search.value.toLowerCase()
	let findItems = globalData.filter( item => item.title.toLowerCase().includes(str) )
	filterData = findItems
	pageFilter(filterData)
}