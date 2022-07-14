<?php 

require_once "conexion.php";

class ModeloUsuarios{

	static public function mdlMostrarUsuarios(){

		$stmt = Conexion::conectar()-> prepare("SELECT id,nombre_user,usuario_user,contra_user,email_user,'X' as acciones FROM usuarios");

		$stmt -> execute();

		return $stmt -> fetchAll();

		$stmt = null;
	}

	static public function mdlRegistrarUsuarios($nombre_user, $usuario_user, $contra_user, $email_user){

		$stmt = Conexion::conectar()->prepare("INSERT INTO usuarios(nombre_user,usuario_user,contra_user,email_user) VALUES (:nombre_user,:usuario_user,:contra_user,:email_user)");

		$stmt -> bindParam(":nombre_user", $nombre_user, PDO::PARAM_STR);
		$stmt -> bindParam(":usuario_user", $usuario_user, PDO::PARAM_STR);
		$stmt -> bindParam(":contra_user", $contra_user, PDO::PARAM_STR);
		$stmt -> bindParam(":email_user", $email_user, PDO::PARAM_STR);

		if($stmt -> execute()){
            return "El usuario se registró correctamente";
        }else{
            return "Error, no se pudo registrar el usuario";
        }        

        $stmt = null;

	}

	static public function mdlEliminarUsuario($id){

		$stmt = Conexion::conectar()->prepare("DELETE FROM usuarios WHERE id = :id");

		$stmt -> bindParam(":id", $id, PDO::PARAM_INT);

		if($stmt -> execute()){
            return "El usuario se eliminó correctamente";
        }else{
            return "Error, no se pudo eliminar el usuario";
        }        

        $stmt = null;

	}

	static public function mdlActualizarUsuario($id,$nombre_user, $usuario_user, $contra_user, $email_user){

		$stmt = Conexion::conectar()->prepare("UPDATE usuarios
											   SET nombre_user = :nombre_user,
											   	   usuario_user = :usuario_user,
												   contra_user = :contra_user,
												   email_user = :email_user
											   WHERE id = :id");

		$stmt -> bindParam(":id", $id, PDO::PARAM_INT);
		$stmt -> bindParam(":nombre_user", $nombre_user, PDO::PARAM_STR);
		$stmt -> bindParam(":usuario_user", $usuario_user, PDO::PARAM_STR);
		$stmt -> bindParam(":contra_user", $contra_user, PDO::PARAM_STR);
		$stmt -> bindParam(":email_user", $email_user, PDO::PARAM_STR);


		if($stmt -> execute()){
            return "El usuario se actualizó correctamente";
        }else{
            return "Error, no se pudo actualizar el usuario";
        }        

        $stmt = null;
	}
	

}