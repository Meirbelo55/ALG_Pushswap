select nom as "Nom du genre", count(titre) as "Nombre de films" from genre left join film using(id_genre) group by nom order by count(titre) desc, nom asc;
