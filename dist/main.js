

// The value from the input should be your ingredient parameter




const button = $("#search")
const input = $("#ingredient")

button.on("click", function(){
	const inputVal = input.val()
	$.get(`/recipes/${inputVal}`, function (data) {
		const source = $("#template-ingredient").html()
		const template = Handlebars.compile(source)
		someHTML = template({data})
	
		$("#container").empty().append(someHTML)
	})
})	
		

$("#imgs").on("click", function(){
		const source = $("#template-ingredient").html()
		const template = Handlebars.compile(source)
		someHTML = template(this.closest(`${ingredients}`))
		console.log(`${ingredients}`)
	alert(someHTML)
})
		
