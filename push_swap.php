<?php
 $argv;
function test() {
    global $argv;
    var_dump($argv);
}
test();
if($argv != 3) {
   // print('this program will make your count number order by ');
    //var_dump($argv);
}

  $la = [3,1,2,0,4,5,6,7,8,9];
  $lb = [ 5,1,3,2,4,0,6,7,8,9];

function moveElementInArrayLa(&$lb, $a, $b) {
    $out = array_splice($lb, $a);
    //var_dump($out);
    //array_splice($lb, $b, 0, $out);
    //print_r($lb);
}
function moveElementInArrayLb($lb, $a, $b) {
    $out = array_splice($lb, $a, 1);
    array_splice($lb, $b, 0, $out);
    print_r($lb);
}
//moveElementInArrayLb($lb, 0 , 1);
//moveElementInArrayLa($la, 0, 1);
function moveElementInArrayBoth() {
   global $la;
   global $lb;
    //$out = array_splice($lb, $a, 1);
    array_splice($lb, $lb[1], $lb[1], 2);
    print_r($lb);

}
//moveElementInArrayBoth();



function  numberCount($data) {
    echo $data . "\n";
}
numberCount(1,2,3,4,5,6);

          //la  = 2 8 5 6 0 1 4 3 7 8 9
         //lb = [4 *   ra  +  rra]
            // sa : switch the 2 first number of the la
             //sb : switch the 2 first number of the lb
             //sc : twice  togheter
             //pa : first number of lb go to  first position la
             //pb : first number of  la go to first position lb
             //ra :  first number go  to the last la
             //rb :  first number go  to the last lb
             //rr :  ra  + rb
             //rra :  last number become the first  in la
             //rrb :  last number become the first  in lb
             //rrr : rra + rrb

