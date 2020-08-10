<!DOCTYPE html>
<html>
<head>
	<title>mycinema</title>
</head>
<body>
	<div id="searchbar">
                
        <h1>What would you like to search?</h1>
        <h3>Selectionnez un film de notre cinema;</h3>
            
<form action="connectionmysql.php" method="post">
	
<select name="genre" id="genre">
    <option value="genre">genre</option>
    <option value="adventure">adventure</option>
    <option value="animation">animation</option>
	<option value="biography">biography</option>
	<option value="comedy">comedy</option>
	<option value="detective">detective</option>
    <option value="documentary">documentary</option>
    <option value="drama">drama</option>
    <option value="dramatic comedie">dramatic comedie</option>
    <option value="erotic">erotic</option>
    <option value="exp&amp;atilde;&amp;copy;rimental">exp&amp;atilde;&amp;copy;rimental</option>
    <option value="experimental">experimental</option>
    <option value="family">family</option>
    <option value="fantasy">fantasy</option>
    <option value="historical">historical</option>
    <option value="historical epic">historical epic</option>
    <option value="horror">horror</option>
    <option value="karate">karate</option>
    <option value="music">music</option>
    <option value="musical">musical</option>
    <option value="program">program</option>
    <option value="romance">romance</option>
    <option value="science fiction">science fiction</option>
    <option value="short film">short film</option>
    <option value="science-fiction">science-fiction</option>
    <option value="spying">spying</option>
    <option value="thriller">thriller</option>
    <option value="unknow">unknow</option>
    <option value="various">various</option>
    <option value="war">war</option>
    <option value="western">western</option>
</select>
<br>
<select name="pagination" id="pagination">
    <option value="5">5 per page</option>
    <option value="10">10 per page</option>
    <option value="15">15 per page</option>
    <option value="20">20 per page</option>
</select>
<label>distributeur : 
		<input type="text" action = "connectionmysql.php" name="distributeur" id="distributeur" placeholder="rechercher un distributeur" >
</label>
<br>
<label>nom de film : 
		<input type="text" action = "connectionmysql.php" name="nom_de_film" id="nom_de_film"  placeholder="rechercher un nom de film">
</label>
<p></p>
<label>nom du membre : <input type="text" name="nom_du_membre" id="nom_du_membre" placeholder="nom du membre"></label>
<label>prenom_du_membre :<input type="text" name="prenom_du_membre" id="prenom_du_membre" placeholder="prenom du membre"></label>
<select name="abonnement" id="abonnement">
		<option value="selectionnez_un_abonnement">selectionnez un abonnement</option>
		<option value="supprimer mon pass">supprimer mon pass</option>
		<option value="1">VIP</option>
		<option value="2">GOLD</option>
		<option value="3">Classic</option>
		<option value="4">pass_day</option>
	</select>
<label>historique du membre : <input type="text" name="historique" id="historique" placeholder="nom et son historique"></label>
<br>
<br>
<input type="submit" value="rechercher" style="font-size: 20px;">

</form>

    <script src ="script.js"></script>
	<?php
	
	// include 'connectionmysql.php';
	// include 'distrib.php';
	?>

</body>
</html>