<?php 
$server_name = "localhost";
$user_name = "root";
$user_pass = "";
$database_name = "music_user"; // recommended DB name

$conn = mysqli_connect($server_name, $user_name, $user_pass, $database_name);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//  else {
//     echo "Connection successful";                                
// }
?>
