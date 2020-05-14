// lorsque le user click sur connecter
$(document).ready(function(){
// let on = document.body.style.backgroundColor = "black";
// let off = document.body.style.backgroundColor = "withe";
     // let u = $('switch');
    let bool = false;
	$("#switch").click(function(){
		if(bool){
			$("body").css("backgroundColor","white");
			$("body").css("color","black");
			bool = false;
		} else {
			$("body").css("backgroundColor","black");
			$("body").css("color","white");
			bool = true;
		}
		//document.body.style.backgroundColor = "black";
		})
	});