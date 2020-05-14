<?php
 $a = new PDO('mysql:dbname=tuto;host=localhost','root','root');
 $count = $pdo->exec('INSERT into articles SET titre="Mon titre",date = "' .date('Y-m-d H:i:s')'"');
 var_dump($count);