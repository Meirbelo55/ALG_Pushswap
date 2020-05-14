select substr(MD5(titre), 1, 5) as "Titre MD5", id_film as "Id pair", upper(nom) as "GENRE" from film left join genre using(id_genre) where titre like "%ball%" and id_film%2=0;







CORRECTION THEO : 

select MD5(substr(titre, 1, 5)) as "Titre MD5", id_film as "Id pair", upper(nom) as "GENRE" from film left join genre using(id_genre) where titre like "%ball%" and id_film%2=0;

