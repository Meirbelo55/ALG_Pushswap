<?php
if($argv != 3) {
    print('this program will make your count number order by ');
    //var_dump($argv);
}
$array = [
    0 => 'red',
    1 => 'black',
    2 => 'yellow',
    3 => 'pink',
    4 => 'blue',
];
print_r($array);
function moveElement(&$array, $a, $b) {
    $out = array_splice($array, $a, 1);
    array_splice($array, $b, 0, $out);
    print_r($array);
}

moveElement($array, 0, 1);



function  numberCount($data) {
    echo $data . "\n";
}
numberCount(1,2,3,4,5,6);