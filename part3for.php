<?php


$Months= array ("January","February","March ","April", "May", "June", "July","August", "September", "October", "November","December" );


?>


<?php

$arrlength = count($Months);

for($x = 0; $x < $arrlength; $x++) {
    echo $Months[$x];
    echo "<br>";
}
?>

<?php

sort($Months);

?>
<br>
<br>





<?php

$arrlength = count($Months);

for($x = 0; $x < $arrlength; $x++) {
    echo $Months[$x];
    echo "<br>";
}
?>