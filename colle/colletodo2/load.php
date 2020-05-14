<?php
$dbh = new PDO('mysql:host=localhost;dbname=collejquery', "user", "password");

$sth = $dbh->query("SELECT * FROM tasks");
//fetchAll — Retourne un tableau contenant toutes les lignes du jeu d'enregistrements
$result = $sth->fetchall();

echo json_encode($result);
