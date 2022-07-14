<?php 

require_once "conexion.php";

class ModeloNoticias{

	static public function mdlMostrarNoticias(){

		$stmt = Conexion::conectar()-> prepare("SELECT id,titulo_noti,desc_noti,img_noti,url_noti,'X' as acciones FROM noticias");

		$stmt -> execute();

		return $stmt -> fetchAll();

		$stmt = null;
	}

	static public function mdlRegistrarNoticias($titulo_noti, $desc_noti, $img_noti, $url_noti){

		$stmt = Conexion::conectar()->prepare("INSERT INTO noticias(titulo_noti,desc_noti,img_noti,url_noti) VALUES (:titulo_noti,:desc_noti,:img_noti,:url_noti)");

		$stmt -> bindParam(":titulo_noti", $titulo_noti, PDO::PARAM_STR);
		$stmt -> bindParam(":desc_noti", $desc_noti, PDO::PARAM_STR);
		$stmt -> bindParam(":img_noti", $img_noti, PDO::PARAM_STR);
		$stmt -> bindParam(":url_noti", $url_noti, PDO::PARAM_STR);

		if($stmt -> execute()){
            return "La noticia se registró correctamente";
        }else{
            return "Error, no se pudo registrar la noticia";
        }        

        $stmt = null;

	}

	static public function mdlEliminarNoticia($id){

		$stmt = Conexion::conectar()->prepare("DELETE FROM noticias WHERE id = :id");

		$stmt -> bindParam(":id", $id, PDO::PARAM_INT);

		if($stmt -> execute()){
            return "La noticia se eliminó correctamente";
        }else{
            return "Error, no se pudo eliminar la noticia";
        }        

        $stmt = null;

	}

	static public function mdlActualizarNoticia($id,$titulo_noti, $desc_noti, $img_noti, $url_noti){

		$stmt = Conexion::conectar()->prepare("UPDATE noticias
											   SET titulo_noti = :titulo_noti,
											   	   desc_noti = :desc_noti,
												   img_noti = :img_noti,
												   url_noti = :url_noti
											   WHERE id = :id");

		$stmt -> bindParam(":id", $id, PDO::PARAM_INT);
		$stmt -> bindParam(":titulo_noti", $titulo_noti, PDO::PARAM_STR);
		$stmt -> bindParam(":desc_noti", $desc_noti, PDO::PARAM_STR);
		$stmt -> bindParam(":img_noti", $img_noti, PDO::PARAM_STR);
		$stmt -> bindParam(":url_noti", $url_noti, PDO::PARAM_STR);


		if($stmt -> execute()){
            return "La noticia se actualizó correctamente";
        }else{
            return "Error, no se pudo actualizar la noticia";
        }        

        $stmt = null;
	}
	

}