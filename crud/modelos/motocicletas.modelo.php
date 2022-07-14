<?php 

require_once "conexion.php";

class ModeloMotocicletas{

	static public function mdlMostrarMotocicletas(){

		$stmt = Conexion::conectar()-> prepare("SELECT id, nombre_moto, precio_moto, ano_moto, tipo_moto, marca_moto, motor_moto, poten_moto, despl_moto, bore_moto, 'X' as acciones FROM motos");

		$stmt -> execute();

		return $stmt -> fetchAll();

		$stmt = null;
	}

	static public function mdlRegistrarMotocicletas($nombre_moto, $precio_moto, $ano_moto, $tipo_moto, $marca_moto, $motor_moto, $poten_moto, $despl_moto, $bore_moto){

		$stmt = Conexion::conectar()->prepare("INSERT INTO motos(nombre_moto, precio_moto, ano_moto, tipo_moto, marca_moto, motor_moto, poten_moto, despl_moto, bore_moto) VALUES (:nombre_moto,:precio_moto,:ano_moto,:tipo_moto,:marca_moto,:motor_moto,:poten_moto,:despl_moto,:bore_moto)");

		$stmt -> bindParam(":nombre_moto", $nombre_moto, PDO::PARAM_STR);
		$stmt -> bindParam(":precio_moto", $precio_moto, PDO::PARAM_STR);
		$stmt -> bindParam(":ano_moto", $ano_moto, PDO::PARAM_INT);
		$stmt -> bindParam(":tipo_moto", $tipo_moto, PDO::PARAM_STR);
		$stmt -> bindParam(":marca_moto", $marca_moto, PDO::PARAM_STR);
		$stmt -> bindParam(":motor_moto", $motor_moto, PDO::PARAM_STR);
		$stmt -> bindParam(":poten_moto", $poten_moto, PDO::PARAM_STR);
		$stmt -> bindParam(":despl_moto", $despl_moto, PDO::PARAM_STR);
		$stmt -> bindParam(":bore_moto", $bore_moto, PDO::PARAM_STR);

		if($stmt -> execute()){
            return "La motocicleta se registró correctamente";
        }else{
            return "Error, no se pudo registrar la motocicleta";
        }        

        $stmt = null;

	}

	static public function mdlEliminarMotocicleta($id){

		$stmt = Conexion::conectar()->prepare("DELETE FROM motos WHERE id = :id");

		$stmt -> bindParam(":id", $id, PDO::PARAM_INT);

		if($stmt -> execute()){
            return "La motocicleta se eliminó correctamente";
        }else{
            return "Error, no se pudo eliminar la motocicleta";
        }        

        $stmt = null;

	}

	static public function mdlActualizarMotocicleta($id,$nombre_moto, $precio_moto, $ano_moto, $tipo_moto, $marca_moto, $motor_moto, $poten_moto, $despl_moto, $bore_moto){

		$stmt = Conexion::conectar()->prepare("UPDATE motos
											   SET nombre_moto = :nombre_moto,
											   	   precio_moto = :precio_moto,
												   ano_moto = :ano_moto,
												   tipo_moto = :tipo_moto,
												   marca_moto = :marca_moto,
												   motor_moto = :motor_moto,
												   poten_moto = :poten_moto,
												   despl_moto = :despl_moto,
												   bore_moto = :bore_moto
											   WHERE id = :id");

		$stmt -> bindParam(":id", $id, PDO::PARAM_INT);
		$stmt -> bindParam(":nombre_moto", $nombre_moto, PDO::PARAM_STR);
		$stmt -> bindParam(":precio_moto", $precio_moto, PDO::PARAM_STR);
		$stmt -> bindParam(":ano_moto", $ano_moto, PDO::PARAM_INT);
		$stmt -> bindParam(":tipo_moto", $tipo_moto, PDO::PARAM_STR);
		$stmt -> bindParam(":marca_moto", $marca_moto, PDO::PARAM_STR);
		$stmt -> bindParam(":motor_moto", $motor_moto, PDO::PARAM_STR);
		$stmt -> bindParam(":poten_moto", $poten_moto, PDO::PARAM_STR);
		$stmt -> bindParam(":despl_moto", $despl_moto, PDO::PARAM_STR);
		$stmt -> bindParam(":bore_moto", $bore_moto, PDO::PARAM_STR);

		if($stmt -> execute()){
            return "La motocicleta se actualizó correctamente";
        }else{
            return "Error, no se pudo actualizar la motocicleta";
        }        

        $stmt = null;
	}
	

}