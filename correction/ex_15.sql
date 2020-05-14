select count(annee_prod) as "Nombre de films", annee_prod as "Annee de production" from film group by annee_prod order by annee_prod desc;
