select titre from film left join genre using(id_genre) where nom="action" or nom="romance";
