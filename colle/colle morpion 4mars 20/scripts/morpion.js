$.fn.morpion = function()
	{
		$(this).css("color", "red");
		$('.cell').click(function()
	{
	$(this).text('x');
	})
	}

$(document).ready(function(){
	$('#replay').morpion();
})