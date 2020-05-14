<?php

require 'personnage.php';

$merlin = new Personnage('Merlin');
$merlin->regenerer();

$harry = new Personnage('harry');
var_dump($harry->mort());

var_dump($merlin);
var_dump($harry);
