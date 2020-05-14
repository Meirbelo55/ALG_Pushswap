		<!DOCTYPE html>
		<html>
		<head>
			<title>mycinema</title>
		</head>
		<body>
			<div id="searchbar">             
		    <h1>What would you like to search?</h1>
	
		<?php
		//variable qui recupere les champ selectionne par l'utilisateur
		$reponse_abonnement = $_POST['abonnement'];
		$reponse_membre_prenom = $_POST['prenom_du_membre'];
		$genre = $_POST['genre'];
		$distrib = $_POST['distributeur'];
		$reponse_titre = $_POST['nom_de_film'];
		$reponse_membre = $_POST['nom_du_membre'];
		$prenom_abo = $reponse_membre_prenom;

		//requete pour la connexion entre la bdd et le php
		$bdd = new PDO('mysql:host=localhost;dbname=cinema','root','root', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

		//requette pour selectionner  le genre  de film
		$reponse_genre = $bdd->query('SELECT titre, nom AS "nom_genre" from film LEFT OUTER JOIN genre ON film.id_genre=genre.id_genre  WHERE nom LIKE "' .$genre. '" ORDER BY titre');
		while($donnees = $reponse_genre->fetch())
		{
			print_r('<p>' . $donnees['titre']. '-'. $donnees["nom_genre"] . '</p>');
		}

		//requette pour selectionner le nom du distributeur
		$reponse_distributeur = $bdd->query('SELECT titre,nom AS "nom_distrib" from film LEFT OUTER JOIN distrib ON film.id_distrib=distrib.id_distrib WHERE nom LIKE "'.$distrib. '" ORDER BY titre');
		while($donnees = $reponse_distributeur->fetch())
		{
			print_r('<p>' . $donnees['titre']. '-'. $donnees["nom_distrib"] . '</p>'); 
		}

		//requette pour selectionner le nom du film

		if($reponse_titre != "")
		{
			$reponse_titre = $bdd->query('SELECT DISTINCT titre AS "nom_de_film" FROM film WHERE titre LIKE "%'.$reponse_titre.'%" ORDER BY titre');
			while($donnees = $reponse_titre->fetch())
		{
			print_r('<p>'  . $donnees["nom_de_film"] . '</p>');
		}

		}

		//requette pour selectionner le nom du membre
		$reponse_membre = $bdd->query('SELECT nom, prenom FROM fiche_personne  WHERE  nom = "'.$reponse_membre.'"');
		while ($donnees = $reponse_membre->fetch()) 
		{
		print_r('<p>Bonjour '  . $donnees["nom"] ."-" .  $donnees["prenom"] . ' content de te revoir :-) </p>');
		}

		//requette pour afficher l'historique selon le client
			$reponse_membre_prenom = $bdd->query('SELECT fiche_personne.nom AS nom, prenom, titre,date AS datefilm,abonnement.nom AS abonnement
			    FROM fiche_personne
				LEFT OUTER JOIN membre ON fiche_personne.id_perso=membre.id_fiche_perso
				LEFT OUTER JOIN historique_membre ON membre.id_membre=historique_membre.id_membre
				LEFT OUTER JOIN film ON historique_membre.id_film=film.id_film
			    LEFT OUTER JOIN abonnement ON membre.id_abo=abonnement.id_abo  
				WHERE  prenom = "'.$reponse_membre_prenom.'" 
				 ORDER BY datefilm DESC');
			echo "fdx";
			$i = 0;
			while ($donnees = $reponse_membre_prenom->fetch()) 
			{
				if($donnees['abonnement'] === null)
				{
					$donnees['abonnement'] = 'aucun abonnement';
				}
				if ( $i == 0 ) 
				{
					print_r("<p> Hello {$donnees["prenom"]} -- {$donnees["nom"]}  vous avez le pass  de type --{$donnees["abonnement"]} et vous avez regarde les films suivants :" );
				}

			echo('<p>' .  $donnees["titre"] . '--a la date du ' . $donnees["datefilm"]);
			$i++;
			}
			//requette pour modifier le type d'abonnement;
		$reponse_abonnement = $bdd->query('UPDATE membre LEFT OUTER JOIN fiche_personne ON membre.id_fiche_perso=fiche_personne.id_perso SET membre.id_abo = "'.$reponse_abonnement.'" WHERE prenom LIKE "'.$prenom_abo.'"');
		while ($donnees = $reponse_abonnement->fetch()) 
		{
		echo('<p>Bonjour '  . $donnees["nom"] ."-" .  $donnees["id_abo"] .'</p>');
		}
	echo "fdsvvb";
		// select nom,prenom,titre,date from fiche_personne left outer join historique_membre on fiche_personne.id_perso=historique_membre.id_membre inner join film on film.id_film=historique_membre.id_film;
		//requette pr afficher l'historique selon le nom/prenom select
		// 	$reponse_historique = $bdd->query('SELECT ');
		// 	while ($donnees = $reponse_historique->fetch()) 
		//  {
		// print_r('<p>'  . $donnees["id_historique"] . '</p>');
		//  }
	//systeme de pagination
		?>
		</body>
	</html>