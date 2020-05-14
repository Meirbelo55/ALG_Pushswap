$(document).ready(function(){

	let abonnement;
	function abonner()
	{
		$.ajax ({
			method : "POST",
			url : "./veriffollow.php",
			data : 
			{
				desabonner : "test",
				notreid : "1",
				dugars : "3"
			},
			success : function(val)
			{
				val = JSON.parse(val);
				console.log(val);
				         if(val === true)
				        {
					        abonnement = false;
					        $("#abonner").text("s'abonner");
						} 
							else if (val === false) 
							{
						        abonnement = true;	
						        $("#abonner").text("se desabonner");
					        }
			}
		        })
	}
	
	$("#abonner").click(function()
	{
		console.log(abonnement);
		if(abonnement)
		{
			abonnemnent = false;
			var confirmation = confirm("Are you sure to unfollow?");
			 if (confirmation  === false) 
			 {
			 	console.log('vous tentative de desabonnement a echouer');
			 }
			 else if (confirmation === true)
			{
				$.ajax({
				method : "POST",
				url : "follow.php",
				data : 
				{
					desabonner : "test",
					notreid : "1",
					dugars : "3"
				},
				success : function() 
				{
					abonner();	
				}
			    })
		    }
		} 
		else 
			{
			  abonnement = true;
				$.ajax({
				method : "POST",
				url : "follow.php",
				data : 
				{
					abonner : "test",
					notreid : "1",
					dugars : "3"
				},
				success : function(val)
				{
					abonner();
				}
			    })
		    }
	})

	abonner();
	$("#mesAbonnements").click(function()
	{
		$.ajax({
			method : "POST",
			url : "showAbonnes.php",
			data : 
			{
				 abonner : "test",
				 notreid : "1",
				 dugars : "3"
			},
			success : function(val)
			{
				val = JSON.parse(val)
				$("#profileabonner").html('');
				console.log(val);
				$("#mesAbonnements").append("<div id=\"profileabonner\"></div>")
				for (i in val) {
					val[i];
				$("#profileabonner").append("<p>"+val[i].username+"</p>");
				}
			}


		})
	})
			$("#mesAbonnes").click(function()
			{
				$.ajax({
					method : "POST",
					url : "mesabonnes.php",
					data: 
					{
						abonner : "test",
						notreid : "2",
						dugars : "1"
					},
					success : function(val)
					{
					val = JSON.parse(val);
					$("#profil").html("");
				console.log(val);
				$("#mesabonnes").append()
				for (i in val) {
					val[i];
				$("#profil").append("<p>"+val[i].username+"</p>");
				}
					}
				})
			})



})		 	
		