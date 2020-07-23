<?php

    //if($argv != 3) {
       // print('this program will make your count number order by ');
    //}

  //first array
  $la = [0,1,2,3,4,5,6,7,8,9];
  //second array
  $lb = [ 5,1,3,2,4,0,6,7,8,9];

    function switchTheFirstTwoInLa()
    {
        global $la;
        $temp = $la[0];
        $la[0] = $la[1];
        $la[1] = $temp;
    }
    switchTheFirstTwoInLa();

    function switchTheFirstTwoInLb()
    {
        global $lb;
        $tem = $lb[0];
        $lb[0] = $lb[1];
        $lb[1] = $tem;
    }
     switchTheFirstTwoInLb();

    function switchTheFirstTwoLaLbTogether()
    {
        global $lb;
        global $la;
        $temp = $la[0];
        $la[0] = $la[1];
        $la[1] = $temp;

        $temp = $lb[0];
        $lb[0] = $lb[1];
        $lb[1] = $temp;
    }
     switchTheFirstTwoLaLbTogether();

    //moveElementToAnotherArray
    function moveElement() {
        global $la;
        global $lb;
        $num = 0;
        foreach($la  as $key => $value) {
            if (++$num > 2) break;
                $lb[$key] = $value;
                unset($la[$key]);
            }
    }
    moveElement();

     //switch first element to the last
    function switchFirstToLast() {
        global $la;
        $last = end($la);
        //print_r($last);
        $la[0] = $last;
        echo $last;
    }
    switchFirstToLast();


//$array1= $la;
//array_push($array1,$argv[1]);
//print_r($array1);

function  numberCount($data) {
    echo $data . "\n";
}
//numberCount(1,2,3,4,5,6);


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

