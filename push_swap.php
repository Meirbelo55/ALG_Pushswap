<?php
if($argv != 3) {
    print('this program will make your count number order by ');
    //var_dump($argv);
}
$la = [
    0 => 'red',
    1 => 'black',
    2 => 'yellow',
    3 => 'pink',
    4 => 'blue',
];
$lb  = [];

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

          la  = 2 8 5 6 0 1 4 3 7 8 9
         lb = [4 *   ra  +  rra]
             sa : switch the 2 first number of the la
             sb : switch the 2 first number of the lb
             sc : twice  togheter
             pa : first number of lb go to  first position la
             pb : first number of  la go to first position lb
             ra :  first number go  to the last la
             rb :  first number go  to the last lb
             rr :  ra  + rb
             rra :  last number become the first  in la
             rrb :  last number become the first  in lb
             rrr : rra + rrb

 2 1 3 6 5 7
sa :   la  :1 2 3 6 5 7
lb :
pb : la  2 3 6 5 7
lb : 1
pb : la : 3 6 5 7
lb :  1 2
pb : la : 657
lb :  1 2 3
sa  la : 567
lb:  1 2 3
pa : la : 6 7
lb: 1235
pa: la : 7
lb:  12356
pa: la:
lb: 123567
