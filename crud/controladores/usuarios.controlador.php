<?php 

class ControladorUsuarios{

	static public function ctrMostrarUsuarios(){
		
		$respuesta = ModeloUsuarios::mdlMostrarUsuarios();

		return $respuesta;
	}

	static public function ctrRegistrarUsuarios($nombre_user, $usuario_user, $contra_user, $email_user){

		$respuesta = ModeloUsuarios::mdlRegistrarUsuarios($nombre_user, $usuario_user, $contra_user, $email_user);

		return $respuesta;
	}

	static public function ctrEliminarUsuario($id){

		$respuesta = ModeloUsuarios::mdlEliminarUsuario($id);

		return $respuesta;
	}

	static public function ctrActualizarUsuario($id,$nombre_user, $usuario_user, $contra_user, $email_user){

		$respuesta = ModeloUsuarios::mdlActualizarUsuario($id,$nombre_user, $usuario_user, $contra_user, $email_user);

		return $respuesta;
	}

}