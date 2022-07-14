<?php 

require_once "../controladores/noticias.controlador.php";
require_once "../modelos/noticias.modelo.php";

class ajaxNoticias{

	public $id;
	public $titulo_noti;
    public $desc_noti;
    public $img_noti;
    public $url_noti;

	public function MostrarNoticias(){

		$respuesta = ControladorNoticias::ctrMostrarNoticias();

		echo json_encode($respuesta);
	}

	public function RegistrarNoticias(){
		
		$respuesta = ControladorNoticias::ctrRegistrarNoticias($this->titulo_noti, $this->desc_noti, $this->img_noti, $this->url_noti);

		echo json_encode($respuesta,JSON_UNESCAPED_UNICODE);
	}

	public function EliminarNoticia(){
		
		$respuesta = ControladorNoticias::ctrEliminarNoticia($this->id);

		echo json_encode($respuesta,JSON_UNESCAPED_UNICODE);
	}

	public function ActualizarNoticia(){
		
		$respuesta = ControladorNoticias::ctrActualizarNoticia($this->id, $this->titulo_noti, $this->desc_noti, $this->img_noti, $this->url_noti);

		echo json_encode($respuesta,JSON_UNESCAPED_UNICODE);
	}
	
}

if(!isset($_POST["accion"])){
	$respuesta = new ajaxNoticias();
	$respuesta -> MostrarNoticias();
}else{

	if($_POST["accion"] == "registrar"){
		$insertar = new ajaxNoticias();
		$insertar->titulo_noti = $_POST["titulo_noti"];
		$insertar->desc_noti = $_POST["desc_noti"];
		$insertar->img_noti = $_POST["img_noti"];
		$insertar->url_noti = $_POST["url_noti"];
		$insertar->RegistrarNoticias();
	}

	if($_POST["accion"] == "eliminar"){
		$eliminar = new ajaxNoticias();

		$eliminar->id = $_POST["id"];
		
		$eliminar->EliminarNoticia();
	}

	if($_POST["accion"] == "actualizar"){
		$actualizar = new ajaxNoticias();

		$actualizar->id = $_POST["id"];
		$actualizar->titulo_noti = $_POST["titulo_noti"];
		$actualizar->desc_noti = $_POST["desc_noti"];
		$actualizar->img_noti = $_POST["img_noti"];
		$actualizar->url_noti = $_POST["url_noti"];
		
		$actualizar->ActualizarNoticia();
	}

}