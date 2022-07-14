<?php 

include 'config.php';

session_start();

error_reporting(0);

$mensaje = "";

if(isset($_SESSION['usuario_user'])) {
    header("Location: ../crud/index.php");
}

if(isset($_POST['submit'])){
    $email_user = $_POST['email_user'];
    $contra_user = md5($_POST['contra_user']);

    $sql = "SELECT * FROM usuarios WHERE email_user='$email_user' AND contra_user = '$contra_user'";
    $result = mysqli_query($conn, $sql);
    if($result->num_rows > 0) {
        $row = mysqli_fetch_assoc($result);
        $_SESSION['usuario_user'] = $row['usuario_user'];
        header("Location: ../crud/index.php");
    } else {
        $mensaje = "Woops! El email o la contraseña son incorrectas.";
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
<body class="body-login">
    <div class="container-login">
    <form action="" method="POST" class="login-email">
            <p class="login-text">Inicio de sesion con Email</p>
            <div> <?php echo $mensaje ?> </div>
            <div class="input-group">
                <input type="email" placeholder="Email" name="email_user" value="<?php echo $email_user; ?>" required >
            </div>
            <div class="input-group">
                <input type="password" placeholder="Contraseña" name="contra_user" value="<?php echo $_POST['contra_user']; ?>" required >
            </div>
            <div class="input-group">
                <button name="submit" class="btn-login">Inicia Sesion</button>
            </div>
            <p class= "login-register-text">No tienes una cuenta? <a href="register.php">Registrate aqui</a>.</p>
        </form>
    </div>
</body>
</html>