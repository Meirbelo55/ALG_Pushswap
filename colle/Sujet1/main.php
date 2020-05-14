<?php
/*
    Ecrire votre code ici.
    $input est un array.
    Vous devez RETURN le résultat demandé par le sujet.
*/

function colle(Array $input) 
{ 
	$enverlen = [];
	$position = [];
	$final = [];
	unset($input[0]);
   foreach ($input as $key => $value) {
		$str_a = strrev($value);
		$str_b = strrev($str_a);

		array_unshift($enverlen, $str_a);
		array_unshift($position, $str_b);

		if(count($input) === count($enverlen) && count($input) === count($position)) {

			foreach ($enverlen as $k => $v) {
				if(in_array($v, $position)) {
					array_unshift($final, $v);
				}
				$phrase = implode(" ", $final);
			}
		}
	}
	return $phrase;
}

