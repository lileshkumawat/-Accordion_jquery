$(document).ready(function(){

		$('.show_list').click(function(e){

	    	e.preventDefault()

	    	$(this).next().slideToggle("slow")

	})
})