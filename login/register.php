<?php

include 'config.php';

error_reporting(0);

session_start();

$mensaje = "";

if(isset($_SESSION['usuario_user'])) {
    header("Location: index.php");
}

if(isset($_POST['submit'])) {
    $nombre_user = $_POST['nombre_user'];
    $usuario_user = $_POST['usuario_user'];
    $email_user = $_POST['email_user'];
    $contra_user = md5($_POST['contra_user']);
    $ccontra_user = md5($_POST['ccontra_user']);

    if($contra_user == $ccontra_user) {
        $sql = "SELECT * FROM usuarios WHERE email_user='$email_user' OR contra_user='$contra_user'";
        $result = mysqli_query($conn, $sql);
        if ($result->num_rows > 0) {
            $mensaje = "Woops! El email ya esta registrado";
        } else {
        $sql = "INSERT INTO usuarios (nombre_user, usuario_user, email_user, contra_user) 
                VALUES ('$nombre_user', '$usuario_user', '$email_user', '$contra_user')";
        $result = mysqli_query($conn, $sql);
        if($result){
            echo "<script>alert('Wow! Registro Exitoso.')</script>";
            $nombre_user = "";
            $usuario_user = "";
            $email_user = "";
            $_POST['contra_user'] = "";
            $_POST['ccontra_user'] = "";
        } else {
            echo "<script>alert('Woops! Something wrong went.')</script>";
        }
    }
        
    } else {
        $mensaje = "Woops! Las contraseñas no coinciden";
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../css/styles.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/fontawesome.min.css" crossorigin="anonymous"></head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Registro</title>
<body class="body-login">
    <div class="container-login">
        <form action="" method="POST" class="login-email">
            <p class="login-text" style="font-size: 2rem; font-weight: 800;">Registrate</p>
            <div> <?php echo $mensaje ?></div>
            <div class="input-group">
                <input type="text" placeholder="Nombre" name="nombre_user" value="<?php echo $nombre_user ?>" required >
            </div>
            <div class="input-group">
                <input type="text" placeholder="Usuario" name="usuario_user" value="<?php echo $usuario_user ?>" required >
            </div>
            <div class="input-group">
                <input type="email" placeholder="Email" name="email_user" value="<?php echo $email_user ?>" required >
            </div>
            <div class="input-group">
                <input type="password" placeholder="Contraseña" name="contra_user" value="<?php echo $_POST['contra_user']; ?>" required >
            </div>
            <div class="input-group">
                <input type="password" placeholder="Confirmar Contraseña" name="ccontra_user" value="<?php echo $_POST['ccontra_user']; ?>" required >
            </div>            <div class="input-group">
                <button name="submit" class="btn-login">Registrate</button>
            </div>
            <p class= "login-register-text">Tienes una cuenta? <a href="index.php">Inicia sesion aqui</a>.</p>
        </form>
    </div>
</body>
</html>