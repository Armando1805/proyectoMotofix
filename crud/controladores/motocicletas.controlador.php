<?php 

class ControladorMotocicletas{

	static public function ctrMostrarMotocicletas(){
		
		$respuesta = ModeloMotocicletas::mdlMostrarMotocicletas();

		return $respuesta;
	}

	static public function ctrRegistrarMotocicletas($nombre_moto, $precio_moto, $ano_moto, $tipo_moto, $marca_moto, $motor_moto, $poten_moto, $despl_moto, $bore_moto){

		$respuesta = ModeloMotocicletas::mdlRegistrarMotocicletas($nombre_moto, $precio_moto, $ano_moto, $tipo_moto, $marca_moto, $motor_moto, $poten_moto, $despl_moto, $bore_moto);

		return $respuesta;
	}

	static public function ctrEliminarMotocicleta($id){

		$respuesta = ModeloMotocicletas::mdlEliminarMotocicleta($id);

		return $respuesta;
	}

	static public function ctrActualizarMotocicleta($id,$nombre_moto, $precio_moto, $ano_moto, $tipo_moto, $marca_moto, $motor_moto, $poten_moto, $despl_moto, $bore_moto){

		$respuesta = ModeloMotocicletas::mdlActualizarMotocicleta($id,$nombre_moto, $precio_moto, $ano_moto, $tipo_moto, $marca_moto, $motor_moto, $poten_moto, $despl_moto, $bore_moto);

		return $respuesta;
	}

}