$(document).ready(function(){
	$.ajax ({
			method : "POST",
			url : "./showfollowers.php",
			data : 
			{
				desabonner : "test",
				notreid : "1",
				dugars : "2"
			},
			success : function(val)
			{
				val = JSON.parse(val);
				console.log(val);
				if(val === true){
					abonnement = false;	
					$("#abonner").text("s'abonner");
					$("#abonner").text("se desabonner")		
				
			}
		}
	})
	
	$("#abonner").click(function(){
		console.log(abonnement);
		if(abonnement){
			abonnemnent = false;
		
			 var confirmation = confirm("Are you sure to unfollow?");
			 if (confirmation  === false) {
			 	console.log('vous tentative de desabonnement a echouer');
			 }
			 else if (confirmation === true)
			 {
			$.ajax({
				method : "POST",
				url : "follow.php",
				data : {
					desabonner : "test",
					notreid : "1",
					dugars : "2"
				},
				success : function() {
					abonner();	
				}
			})
		}
		} else {
			abonnement = true;
			$.ajax({
				method : "POST",
				url : "follow.php",
				data : {
					abonner : "test",
					notreid : "1",
					dugars : "2"
				},
				success : function(val){
					abonner();
				}
			})
		}
	})

	abonner();
})		 	
		