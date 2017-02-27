<?php

if(isset($_POST['fontsize'], $_POST['fontcolor'], $_POST['fontstyle']))
{
    $select2 = $_POST['fontsize'];
    switch ($select2) {
        case 'svalue1':
           $_POST['fontsize']="50%";
            break;
case 'svalue2':
           $_POST['fontsize']="100%";
            break;
case 'svalue3':
           $_POST['fontsize']="200%";
            break;
     case 'svalue4':
           $_POST['fontsize']="400%";
            break;
     
case 'svalue5':
           $_POST['fontsize']="500%";
            break;
     
    }
}
?>
<?php
if(isset($_POST['fontsize'], $_POST['fontcolor'], $_POST['fontstyle'])){
    $select3 = $_POST['fontstyle'];
    switch ($select3) {
        case 'svalue1':
           $_POST['fontstyle']="arial";
            break;
case 'svalue2':
           $_POST['fontstyle']="georgia";
            break;
case 'svalue3':
           $_POST['fontstyle']="bookman";
            break;
     case 'svalue4':
           $_POST['fontstyle']="bookman";
            break;
     
case 'svalue5':
           $_POST['fontstyle']="georgia";
            break;
     
    }
}
?>
<?php
if(isset($_POST['fontsize'], $_POST['fontcolor'], $_POST['fontstyle'])){
    $select1 = $_POST['fontcolor'];
    switch ($select1) {
        case 'value1':
           $_POST['fontcolor']="blue";
            break;
case 'value2':
           $_POST['fontcolor']="red";
            break;
case 'value3':
           $_POST['fontcolor']="green";
            break;
     case 'value4':
           $_POST['fontcolor']="yellow";
            break;
     
case 'value5':
           $_POST['fontcolor']="black";
            break;
     
    }
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <meta http-equiv="Content-Type"
              content="text/html; charset=UTF-8">
        <title>Handle Form 1</title>
    </head>

<!--
To change this template, choose Tools | Templates
and open the template in the editor.
-->
<html>


<head>
<style>
body {background-color:white}
h1   {color: blue;}
p    {color:  <?php echo $_POST["fontcolor"]; ?>;

 font-family:  <?php echo $_POST["fontstyle"]; ?>;
    font-size: <?php echo $_POST["fontsize"]; ?>;

}
</style>
</head>
<body>
    <body><p>





        <?php
        $fontstyle = $_POST["fontstyle"];
        $fontsize = $_POST["fontsize"];
        $fontcolor = $_POST["fontcolor"];
        $address = $_POST["address"];
   echo "$address";
        ?>
</p>
    </body>
</html>