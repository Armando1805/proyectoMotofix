<?php 

include '../login/config.php';

session_start();

if(!isset($_SESSION['usuario_user'])) {
    header("Location: ../login/index.php");
}

require_once "controladores/plantilla.controlador.php";

$plantilla = new PlantillaControlador();
$plantilla->plantilla();