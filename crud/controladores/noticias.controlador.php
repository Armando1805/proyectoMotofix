<?php 

class ControladorNoticias{

	static public function ctrMostrarNoticias(){
		
		$respuesta = ModeloNoticias::mdlMostrarNoticias();

		return $respuesta;
	}

	static public function ctrRegistrarNoticias($titulo_noti, $desc_noti, $img_noti, $url_noti){

		$respuesta = ModeloNoticias::mdlRegistrarNoticias($titulo_noti, $desc_noti, $img_noti, $url_noti);

		return $respuesta;
	}

	static public function ctrEliminarNoticia($id){

		$respuesta = ModeloNoticias::mdlEliminarNoticia($id);

		return $respuesta;
	}

	static public function ctrActualizarNoticia($id,$titulo_noti, $desc_noti, $img_noti, $url_noti){

		$respuesta = ModeloNoticias::mdlActualizarNoticia($id,$titulo_noti, $desc_noti, $img_noti, $url_noti);

		return $respuesta;
	}

}