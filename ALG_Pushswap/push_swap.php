<?php

  //first array
  $la = $argv;
  array_shift($la);
  //second array
  $lb = [];
 //sa
    function switchTheFirstTwoInLa()
    {
        global $la;
        $temp = $la[0];
        $la[0] = $la[1];
        $la[1] = $temp;
        print_r($la);
    }
    switchTheFirstTwoInLa();

    function switchTheFirstTwoInLb()  {
        global $lb;
        if($lb == null) {
            return null;
        }
        else {
            $tem = $lb[0];
            $lb[0] = $lb[1];
            $lb[1] = $tem;
            print_r($lb);
        }
    }
     //switchTheFirstTwoInLb();

    function switchTheFirstTwoLaLbTogether()
    {
        global $lb;
        global $la;
        $temp = $la[0];
        $la[0] = $la[1];
        $la[1] = $temp;
        print_r($la);
            if($lb == null) {
                return null;
            }
            else {
                $tem = $lb[0];
                $lb[0] = $lb[1];
                $lb[1] = $tem;
                print_r($lb);
            }
    }
    //switchTheFirstTwoLaLbTogether();

    function moveElement() {
        global $la;
        global $lb;
        $num = 0;
        foreach($la  as $key => $value) {
            if (++$num > 1) break;
                $lb[$key] = $value;
                unset($la[$key]);
            }
        print_r($la);
        print_r($lb);
    }
    //moveElement();

     //switch first element to the last
    function switchFirstToLastLa() {
        global $la;
        $first = array_shift($la);
        $last = end($la);
        //$last = end($la);
        //$last = $first;
        array_push($la,$first);
        print_r($la);

    }
    //switchFirstToLastLa();

function switchFirstToLastLb() {
    global $lb;
    $first = array_shift($lb);
    $last = end($lb);
    //$last = end($la);
    array_push($lb,$first);
    print_r($lb);
}
  //switchFirstToLastLb();

function switchFirstToLastBoth() {
    global $la;
    global $lb;
    //for la array
    $firstLa = array_shift($la);
    array_push($la,$firstLa);
    //for lb array
    $firstLb = array_shift($lb);
    array_push($lb,$firstLb);

}
    //switchFirstToLastBoth();

    function switchLastToFirstLa() {
        global $la;
       // $last = end($la);
        $first = $la[0];
        //$la[0] = $last;
        array_unshift($la,array_pop($la));
        print_r($la);
    }
   // switchLastToFirstLa();

function switchLastToFirstLb() {
    global $lb;
    // $last = end($la);
    $first = $lb[0];
    //$la[0] = $last;
    array_unshift($lb,array_pop($lb));
    print_r($lb);
}
   // switchLastToFirstLb();

function switchLastToFirstBoth() {
    global $la;
    global $lb;
    $firstLa = $la[0];
    $first = $lb[0];
    array_unshift($la,array_pop($la));
    array_unshift($lb,array_pop($lb));
    print_r($lb);
}

//switchLastToFirstBoth();



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

