select concat(upper(substr(nom,1,1)), substr(nom,2), "-", prenom) as "Full name" from fiche_personne order by date_naissance desc;
