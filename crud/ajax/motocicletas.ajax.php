<?php 

require_once "../controladores/motocicletas.controlador.php";
require_once "../modelos/motocicletas.modelo.php";

class ajaxMotocicletas{

	public $id;
	public $nombre_moto;
	public $precio_moto;
	public $ano_moto;
	public $tipo_moto;
	public $marca_moto;
	public $motor_moto;
	public $poten_moto;
	public $despl_moto;
	public $bore_moto;



	public function MostrarMotocicletas(){

		$respuesta = ControladorMotocicletas::ctrMostrarMotocicletas();

		echo json_encode($respuesta);
	}

	public function RegistrarMotocicletas(){
		
		$respuesta = ControladorMotocicletas::ctrRegistrarMotocicletas($this->nombre_moto, $this->precio_moto, $this->ano_moto, $this->tipo_moto, $this->marca_moto, $this->motor_moto, $this->poten_moto, $this->despl_moto, $this->bore_moto);

		echo json_encode($respuesta,JSON_UNESCAPED_UNICODE);
	}

	public function EliminarMotocicleta(){
		
		$respuesta = ControladorMotocicletas::ctrEliminarMotocicleta($this->id);

		echo json_encode($respuesta,JSON_UNESCAPED_UNICODE);
	}

	public function ActualizarMotocicleta(){
		
		$respuesta = ControladorMotocicletas::ctrActualizarMotocicleta($this->id, $this->nombre_moto, $this->precio_moto, $this->ano_moto, $this->tipo_moto, $this->marca_moto, $this->motor_moto, $this->poten_moto, $this->despl_moto, $this->bore_moto);

		echo json_encode($respuesta,JSON_UNESCAPED_UNICODE);
	}
	
}

if(!isset($_POST["accion"])){
	$respuesta = new ajaxMotocicletas();
	$respuesta -> MostrarMotocicletas();
}else{

	if($_POST["accion"] == "registrar"){
		$insertar = new ajaxMotocicletas();
		$insertar->nombre_moto = $_POST["nombre_moto"];
		$insertar->precio_moto = $_POST["precio_moto"];
		$insertar->ano_moto = $_POST["ano_moto"];
		$insertar->tipo_moto = $_POST["tipo_moto"];
		$insertar->marca_moto = $_POST["marca_moto"];
		$insertar->motor_moto = $_POST["motor_moto"];
		$insertar->poten_moto = $_POST["poten_moto"];
		$insertar->despl_moto = $_POST["despl_moto"];
		$insertar->bore_moto = $_POST["bore_moto"];
		$insertar->RegistrarMotocicletas();
	}

	if($_POST["accion"] == "eliminar"){
		$eliminar = new ajaxMotocicletas();

		$eliminar->id = $_POST["id"];
		
		$eliminar->EliminarMotocicleta();
	}

	if($_POST["accion"] == "actualizar"){
		$actualizar = new ajaxMotocicletas();

		$actualizar->id = $_POST["id"];
		$actualizar->nombre_moto = $_POST["nombre_moto"];
		$actualizar->precio_moto = $_POST["precio_moto"];
		$actualizar->ano_moto = $_POST["ano_moto"];
		$actualizar->tipo_moto = $_POST["tipo_moto"];
		$actualizar->marca_moto = $_POST["marca_moto"];
		$actualizar->motor_moto = $_POST["motor_moto"];
		$actualizar->poten_moto = $_POST["poten_moto"];
		$actualizar->despl_moto = $_POST["despl_moto"];
		$actualizar->bore_moto = $_POST["bore_moto"];
		
		$actualizar->ActualizarMotocicleta();
	}

}




