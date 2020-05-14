select titre as "Titre du film", nom as "Nom du distributeur" from film left join distrib using(id_distrib) where id_film in(21,87,263,413,633);
