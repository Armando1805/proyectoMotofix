<?php

$server = "localhost";
$username = "root";
$password = "";
$database = "motofix_moto";

$conn = mysqli_connect($server, $username, $password, $database);

if (!$conn) {
    die("<script>alert('Fallo la Conexion.')</script>");
}
?>