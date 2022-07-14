<?php 

require_once "../controladores/usuarios.controlador.php";
require_once "../modelos/usuarios.modelo.php";

class ajaxUsuarios{

	public $id;
	public $nombre_user;
    public $usuario_user;
    public $contra_user;
    public $email_user;

	public function MostrarUsuarios(){

		$respuesta = ControladorUsuarios::ctrMostrarUsuarios();

		echo json_encode($respuesta);
	}

	public function registrarUsuarios(){
		
		$respuesta = ControladorUsuarios::ctrRegistrarUsuarios($this->nombre_user, $this->usuario_user, $this->contra_user, $this->email_user);

		echo json_encode($respuesta,JSON_UNESCAPED_UNICODE);
	}

	public function eliminarUsuario(){
		
		$respuesta = ControladorUsuarios::ctrEliminarUsuario($this->id);

		echo json_encode($respuesta,JSON_UNESCAPED_UNICODE);
	}

	public function actualizarUsuario(){
		
		$respuesta = ControladorUsuarios::ctrActualizarUsuario($this->id, $this->nombre_user, $this->usuario_user, $this->contra_user, $this->email_user);

		echo json_encode($respuesta,JSON_UNESCAPED_UNICODE);
	}
	
}

if(!isset($_POST["accion"])){
	$respuesta = new ajaxUsuarios();
	$respuesta -> MostrarUsuarios();
}else{

	if($_POST["accion"] == "registrar"){
		$insertar = new ajaxUsuarios();
		$insertar->nombre_user = $_POST["nombre_user"];
		$insertar->usuario_user = $_POST["usuario_user"];
		$insertar->contra_user = md5($_POST["contra_user"]);
		$insertar->email_user = $_POST["email_user"];
		$insertar->registrarUsuarios();
	}

	if($_POST["accion"] == "eliminar"){
		$eliminar = new ajaxUsuarios();

		$eliminar->id = $_POST["id"];
		
		$eliminar->eliminarUsuario();
	}

	if($_POST["accion"] == "actualizar"){
		$actualizar = new ajaxUsuarios();

		$actualizar->id = $_POST["id"];
		$actualizar->nombre_user = $_POST["nombre_user"];
		$actualizar->usuario_user = $_POST["usuario_user"];
		$actualizar->contra_user = md5($_POST["contra_user"]);
		$actualizar->email_user = $_POST["email_user"];
		
		$actualizar->actualizarUsuario();
	}

}