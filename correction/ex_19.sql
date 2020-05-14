select etage_salle as "Numero etage", sum(nbr_siege) as "Nombre total de sieges", count(numero_salle) as "Nombre total de salles" from salle group by etage_salle order by sum(nbr_siege);
