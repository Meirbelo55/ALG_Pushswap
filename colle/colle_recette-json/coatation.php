<?php
$json = file_get_contents("cotation_bourse.json");

$parsed_json = json_decode($json);
$date_jour = $parsed_json->{'response'}->{'features'}->{'date'};
?>