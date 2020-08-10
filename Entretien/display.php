<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<div id="CSVTable"></div>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="//jquerycsvtotable.googlecode.com/files/jquery.csvToTable.js"></script>

<script>
    $(function() {
        $('#CSVTable').CSVToTable('discussion.csv');
    });
</script>
<form action="/">
    <label>Nom d'utilisateur</label>
    <input type="text" id="nom">

    <label>prive</label>
    <input type="checkbox" id="prive">

    <label>public</label>
    <input type="checkbox" id="public">
  <br>
     <label>Theme :</label>
    <select>
        <option>Activite Physique</option>
        <option>Hygiene de vie</option>
    </select>
    <div></div>
    <label>Votre Message :</label>
    <input type="text" max="300">
    <br>
    <input type="submit" value="Envoyer">
</form>
<?php
$row = 1;
if (($handle = fopen("discussion.csv", "r"))) {
    while (($data = fgetcsv($handle, 1000, ","))) {
        $num = count($data);
        $row++;
        for ($c=0; $c < $num; $c++) {
            echo $data[$c] . "\n";
        }
    }
    fclose($handle);
} ?>
</body>
</html>