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

$sql = "SELECT * from MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table><tr><th>id.</th><th>first Name</th><br></th></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
   echo "<tr><td>".$row["id"]."</td><td>".$row["firstname"]." ".$row["lastname"]."</td></tr>";
    }
    echo "</table>";
} else {
    echo "This Student Has not been assigned to any faculty";
}
$conn->close();
?> 