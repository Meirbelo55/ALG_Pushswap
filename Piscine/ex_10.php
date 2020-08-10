<?php 
   function print_calls() {
       static $a = 0;
      $a++;
      echo $a ."\n";
   }
   print_calls();
   print_calls();
   print_calls();