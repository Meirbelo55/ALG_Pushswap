<?php

if (!file_exists("./Tester/problem.php") || !file_exists("./Tester/solution.php") || !file_exists("./main.php")) {
    echo "Missing file\n";
    return;
}

include "./Tester/problem.php";
include "./Tester/solution.php";
include "./main.php";

for ($i = 0; $i < count($tests); $i++) {
    echo "Test [" . ($i + 1) . "/" . count($tests) . "] :\t";
    if (colle($tests[$i]) == $solutions[$i]) {
        echo "\033[32mCorrect\033[37m\n";
    } else {
        echo "\033[31mFailed\033[37m\n";
    }
}
