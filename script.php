<?php
include_once('./functions/checkThreeAndTwo.php');
include_once('./functions/longestConsec.php');

// longestConsec----------------
longestConsec();





// checkThreeAndTwo -------------
$array = [
    'a',
    'a',
    'c',
    'c',
    'c'
];

var_dump(checkThreeAndTwo($array));