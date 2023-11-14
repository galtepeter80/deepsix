<?php

function isLocalhost($whitelist = ['127.0.0.1', '::1']) {
    return in_array($_SERVER['REMOTE_ADDR'], $whitelist);
}

$servername = "localhost";
$username = isLocalhost() ? "admin" : "id21206565_river_city_admin";
$password = isLocalhost() ? "admin" : "deeIsaBird9!";
$database = "id21206565_river_city_db";

// if (!function_exists('mysqli_init') && !extension_loaded('mysqli')) {
//     echo 'We don\'t have mysqli!!!';
// } else {
//     echo 'Phew we have it!';
// }

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>