select cpostal as "Code postaux" from fiche_personne group by cpostal having count(nom)>1;