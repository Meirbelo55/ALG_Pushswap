select substr(cpostal, 1, 2) as "Departement", count(cpostal) from fiche_personne group by Departement;
