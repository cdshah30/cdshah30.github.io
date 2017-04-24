


  <?php
$servername = "localhost";
$username = "cshah8";
$password = "cshah8";
$dbname="cshah8";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// sql to create table
$sql = "CREATE TABLE MyGuests (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>





      <?php
         if(isset($_POST['update'])) {
            $dbhost = 'localhost';
            $dbuser = 'cshah8';
            $dbpass = 'cshah8';
               $dbname='cshah8';


            
            $conn = mysql_connect("localhost", "cshah8", "cshah8","cshah8");
            
            if(! $conn ) {
               die('Could not connect: ' . mysql_error());
            }
            
            $val1 = $_POST['val1'];
            $val2 = $_POST['val2'];
            $val3 = $_POST['val3'];
            $val4 = $_POST['val4'];
            $val5 = $_POST['val5'];
            $email = $_POST['email'];
         

     
             
   $sql = "insert into MyGuests values('$val1','$val2','$val3','$val4','$val5')";
 

            mysql_select_db('cshah8');
            $retval = mysql_query( $sql, $conn );
            
            if(! $retval ) {
               die('Could not update data: ' . mysql_error());
            }
            echo "Updated data successfully\n";
            
            mysql_close($conn);
         }else {
            ?>
               <form method = "post" action = "<?php $_PHP_SELF ?>">
           






     <div class="container">

    <div class="form-group">
      <div class="col-xs-5">
        <label for="ex1">Panther ID</label>
        <input class="form-control" id="ex1" name="val1" type="text" >">
      </div>
      <div class="col-xs-5">
        <label for="ex2">First Name</label>
        <input class="form-control" id="ex2" type="text" name="val2" ">
      </div>
<br>
<br>
<br>
   <div class="form-group">
      <div class="col-xs-5">
        <label for="ex1">Last Name</label>
        <input class="form-control" id="ex1" type="text" name="val3" >
      </div>
<div class="form-group">
      <div class="col-xs-5">
        <label for="ex1">Last Name</label>
        <input class="form-control" id="ex1" type="text" name="val4" >
      </div>
<div class="form-group">
      <div class="col-xs-5">
        <label for="ex1">Last Name</label>
        <input class="form-control" id="ex1" type="text" name="val5" >
      </div>
</div>
<br>
<br>



   
    <input class="form-control" name = "update" type = "submit" 
                              id = "update" value = "Update">
                     
                  
                  </table>
               </form>
            <?php
         }
      ?>


