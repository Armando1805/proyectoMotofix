<!-- CONTENT-HEADER -->
<section class="content-header">

	<div class="container-fluid">

		<div class="row mb-2">

			<div class="col-sm-6">
				<h1>Administrar Noticias</h1>
			</div>

			<div class="col-sm-6">
				
				<ol class="breadcrumb float-sm-right">

					<li class="breadcrumb-item"><a href="index.php">Inicio</a></li>

                	<li class="breadcrumb-item active">Gestor Noticias</li>						
				</ol>

			</div>
		</div>	
	</div>	

</section>
<!-- /. CONTENT HEADER -->

<!-- CONTENT -->
<section class="content">
    
    <div class="container-fluid">   

        <div class="btn-agregar-noticia btnAgregar">
            <button type="button" class="btn btn-info btn-sm mb-4" data-toggle="modal" data-target="#modal-gestionar-noticia" data-dismiss="modal"> <i class="fas fa-plus-square"></i> Agregar Noticia</button>
        </div>

        <table id="tablaNoticias" class="table table-striped table-bordered nowrap" style="width:100%;">
            <thead class="bg-info">
                <tr>
                    <td style="width:5%;">ID</td>
                    <td>Titulo</td>
                    <td>Descripcion</td>
                    <td style="width:15%;">Img</td>
                    <td style="width:10%;">Url</td>
                    <td style="width:5%;">Accion</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>    

    </div>  

</section>
<!-- ./ CONTENT -->

<!-- VENTANA MODAL PARA REGISTRO Y ACTUALIZACION -->
<div class="modal fade" id="modal-gestionar-noticia">

    <div class="modal-dialog modal-lg">

        <div class="modal-content">

            <!-- ============================================================
            =MODAL HEADER
            ===============================================================-->
            <div class="modal-header bg-info">
                <h4 class="modal-title">Gestionar Noticias</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <!-- ============================================================
            =MODAL BODY
            ===============================================================-->
            <div class="modal-body">
               <div class="row">
                   <div class="col-sm-12">
                        <div class="form-group">
                            <input type="hidden" id ="idNoticia" name ="idNoticia" value ="">
                            <label for="txt_Titulo">Titulo</label>
                            <input type="text" class="form-control" name="titulo_noti" id="txt_Titulo" placeholder="Ingrese el Titulo">
                        </div>
                   </div>
                   <div class="col-sm-12">
                        <div class="form-group">
                            <label for="txtDesc">Descripcion</label>
                            <textarea rows="20" cols="100" class="form-control text-area" name="desc_noti" id="txtDesc" placeholder="Ingrese la Descripcion"></textarea>
                        </div>
                   </div>
                   <div class="col-sm-6">
                        <div class="form-group">
                            <div class="form-group">
                                <label for="txtImg">Imagen</label>
                                <input type="text" class="form-control" name="" id="txtImg" placeholder="Ingrese la Imagen">
                            </div>
                        </div>
                   </div>
                   <div class="col-sm-6">
                        <div class="form-group">
                            <div class="form-group">
                                <label for="txtUrl">URL</label>
                                <input  type="text" class="form-control" name="url_noti" id="txtUrl" placeholder="Ingrese la Url">
                            </div>
                        </div>
                   </div>
               </div>
            </div>
            <!-- ============================================================
            =MODAL FOOTER
            ===============================================================-->
            <div class="modal-footer justify-content-end">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                <button type="button" id="btnGuardar" class="btn btn-primary">Guardar</button>
            </div>

        </div>

    </div>

</div>
<!-- ./ VENTANA MODAL PARA REGISTRO Y ACTUALIZACION -->

<script>

	$(document).ready(function(){

        var accion = "";

        var Toast = Swal.mixin({
                                  toast: true,
                                  position: 'top-end',
                                  showConfirmButton: false,
                                  timer: 3000
                                });

  		var table = $("#tablaNoticias").DataTable({
  			"ajax":{
				"url": "ajax/noticias.ajax.php",
				"type":"POST",
				"dataSrc":""
			},  			
            "columnDefs":[ 
            		{
	            		"targets": 5,
	            		"sortable": false,
	            		"render": function (data, type, full, meta){
	            			return "<center>" +
	                                    "<button type='button' class='btn btn-primary btn-sm btnEditar' data-toggle='modal' data-target='#modal-gestionar-noticia'> " +
	            						  "<i class='fas fa-pencil-alt'></i> " +
	            					    "</button> " + 
	            					    "<button type='button' class='btn btn-danger btn-sm btnEliminar'> " +
	            						  "<i class='fas fa-trash'> </i> " +
	            					    "</button>" +
	                                "</center>";
	                    }
            		}
            	],
            "columns":[
                    {"data": "id"},
                    {"data": "titulo_noti"},
                    {"data": "desc_noti"},
                    {"data": "img_noti"},
                    {"data": "url_noti"}
                    
                ],

            "language":{
                    "processing": "Procesando...",
                    "lengthMenu": "Mostrar _MENU_ registros",
                    "zeroRecords": "No se encontraron resultados",
                    "emptyTable": "Ningún dato disponible en esta tabla",
                    "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                    "search": "Buscar:",
                    "infoThousands": ",",
                    "loadingRecords": "Cargando...",
                    "paginate": {
                        "first": "Primero",
                        "last": "Último",
                        "next": "Siguiente",
                        "previous": "Anterior"
                    },
                    "aria": {
                        "sortAscending": ": Activar para ordenar la columna de manera ascendente",
                        "sortDescending": ": Activar para ordenar la columna de manera descendente"
                    },
                    "buttons": {
                        "copy": "Copiar",
                        "colvis": "Visibilidad",
                        "collection": "Colección",
                        "colvisRestore": "Restaurar visibilidad",
                        "copyKeys": "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br \/> <br \/> Para cancelar, haga clic en este mensaje o presione escape.",
                        "copySuccess": {
                            "1": "Copiada 1 fila al portapapeles",
                            "_": "Copiadas %d fila al portapapeles"
                        },
                        "copyTitle": "Copiar al portapapeles",
                        "csv": "CSV",
                        "excel": "Excel",
                        "pageLength": {
                            "-1": "Mostrar todas las filas",
                            "1": "Mostrar 1 fila",
                            "_": "Mostrar %d filas"
                        },
                        "pdf": "PDF",
                        "print": "Imprimir"
                    },
                    "autoFill": {
                        "cancel": "Cancelar",
                        "fill": "Rellene todas las celdas con <i>%d<\/i>",
                        "fillHorizontal": "Rellenar celdas horizontalmente",
                        "fillVertical": "Rellenar celdas verticalmentemente"
                    },
                    "decimal": ",",
                    "searchBuilder": {
                        "add": "Añadir condición",
                        "button": {
                            "0": "Constructor de búsqueda",
                            "_": "Constructor de búsqueda (%d)"
                        },
                        "clearAll": "Borrar todo",
                        "condition": "Condición",
                        "conditions": {
                            "date": {
                                "after": "Despues",
                                "before": "Antes",
                                "between": "Entre",
                                "empty": "Vacío",
                                "equals": "Igual a",
                                "notBetween": "No entre",
                                "notEmpty": "No Vacio",
                                "not": "Diferente de"
                            },
                            "number": {
                                "between": "Entre",
                                "empty": "Vacio",
                                "equals": "Igual a",
                                "gt": "Mayor a",
                                "gte": "Mayor o igual a",
                                "lt": "Menor que",
                                "lte": "Menor o igual que",
                                "notBetween": "No entre",
                                "notEmpty": "No vacío",
                                "not": "Diferente de"
                            },
                            "string": {
                                "contains": "Contiene",
                                "empty": "Vacío",
                                "endsWith": "Termina en",
                                "equals": "Igual a",
                                "notEmpty": "No Vacio",
                                "startsWith": "Empieza con",
                                "not": "Diferente de"
                            },
                            "array": {
                                "not": "Diferente de",
                                "equals": "Igual",
                                "empty": "Vacío",
                                "contains": "Contiene",
                                "notEmpty": "No Vacío",
                                "without": "Sin"
                            }
                        },
                        "data": "Data",
                        "deleteTitle": "Eliminar regla de filtrado",
                        "leftTitle": "Criterios anulados",
                        "logicAnd": "Y",
                        "logicOr": "O",
                        "rightTitle": "Criterios de sangría",
                        "title": {
                            "0": "Constructor de búsqueda",
                            "_": "Constructor de búsqueda (%d)"
                        },
                        "value": "Valor"
                    },
                    "searchPanes": {
                        "clearMessage": "Borrar todo",
                        "collapse": {
                            "0": "Paneles de búsqueda",
                            "_": "Paneles de búsqueda (%d)"
                        },
                        "count": "{total}",
                        "countFiltered": "{shown} ({total})",
                        "emptyPanes": "Sin paneles de búsqueda",
                        "loadMessage": "Cargando paneles de búsqueda",
                        "title": "Filtros Activos - %d"
                    },
                    "select": {
                        "1": "%d fila seleccionada",
                        "_": "%d filas seleccionadas",
                        "cells": {
                            "1": "1 celda seleccionada",
                            "_": "$d celdas seleccionadas"
                        },
                        "columns": {
                            "1": "1 columna seleccionada",
                            "_": "%d columnas seleccionadas"
                        }
                    },
                    "thousands": ".",
                    "datetime": {
                        "previous": "Anterior",
                        "next": "Proximo",
                        "hours": "Horas",
                        "minutes": "Minutos",
                        "seconds": "Segundos",
                        "unknown": "-",
                        "amPm": [
                            "am",
                            "pm"
                        ]
                    },
                    "editor": {
                        "close": "Cerrar",
                        "create": {
                            "button": "Nuevo",
                            "title": "Crear Nuevo Registro",
                            "submit": "Crear"
                        },
                        "edit": {
                            "button": "Editar",
                            "title": "Editar Registro",
                            "submit": "Actualizar"
                        },
                        "remove": {
                            "button": "Eliminar",
                            "title": "Eliminar Registro",
                            "submit": "Eliminar",
                            "confirm": {
                                "_": "¿Está seguro que desea eliminar %d filas?",
                                "1": "¿Está seguro que desea eliminar 1 fila?"
                            }
                        },
                        "error": {
                            "system": "Ha ocurrido un error en el sistema (<a target=\"\\\" rel=\"\\ nofollow\" href=\"\\\">Más información&lt;\\\/a&gt;).<\/a>"
                        },
                        "multi": {
                            "title": "Múltiples Valores",
                            "info": "Los elementos seleccionados contienen diferentes valores para este registro. Para editar y establecer todos los elementos de este registro con el mismo valor, hacer click o tap aquí, de lo contrario conservarán sus valores individuales.",
                            "restore": "Deshacer Cambios",
                            "noMulti": "Este registro puede ser editado individualmente, pero no como parte de un grupo."
                        }
                    },
                    "info": "Mostrando de _START_ a _END_ de _TOTAL_ entradas"
            },
  		});

        $(".btn-agregar-noticia").on('click',function(){
            accion = "registrar";
        });

        $('#tablaNoticias tbody').on('click','.btnEliminar',function(){
            var data = table.row($(this).parents('tr')).data();
            
            var id = data["id"];

            var datos = new FormData();
            datos.append('accion',"eliminar")
            datos.append('id',id);

            swal.fire({

                title: "¡CONFIRMACION!",
                text: "Seguro que desea eliminar la noticia?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: "Sí, Eliminar",
                cancelButtonText: "Cancelar"

            }).then(resultado => {

                if(resultado.value)  {                    

                    //LLAMADO AJAX
                    $.ajax({
                        url: "ajax/noticias.ajax.php",
                        method: "POST",
                        data: datos,
                        cache: false,
                        contentType: false,
                        processData: false,
                        success: function(respuesta){

                            console.log(respuesta);
                        
                            table.ajax.reload( null, false );                            

                            Toast.fire({
                                icon: 'success',
                                title: respuesta
                            });
                        
                        }
                    })
                }
                else{
                    // alert("no se modifico la noticia");
                }

            })
        })

        $('#tablaNoticias tbody').on('click','.btnEditar',function(){
            
            var data = table.row($(this).parents('tr')).data();
            accion = "actualizar";

            $("#idNoticia").val(data["id"])
            $("#txt_Titulo").val(data["titulo_noti"]);
            $("#txtDesc").val(data["desc_noti"]);
            $("#txtImg").val(data["img_noti"]);
            $("#txtUrl").val(data["url_noti"]);
            

        })

        // GUARDAR LA INFORMACION DE LA NOTICIA DESDE LA VENTANA MODAL
        $("#btnGuardar").on('click',function(){

            var id = $("#idNoticia").val(),
                titulo_noti = $("#txt_Titulo").val(),
                desc_noti = $("#txtDesc").val(),
                img_noti = $("#txtImg").val(),
                url_noti = $("#txtUrl").val();
            
            var datos = new FormData();

            datos.append('id',id)
            datos.append('titulo_noti',titulo_noti)
            datos.append('desc_noti',desc_noti);
            datos.append('img_noti',img_noti);
            datos.append('url_noti',url_noti);
            datos.append('accion',accion);

            swal.fire({
                title: "¡CONFIRMAR!",
                text: "¿Está seguro que desea registrar la noticia?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: "Si, deseo registrar",
                cancelButtonText: "Cancelar"
            
            }).then(resultado => {

                if(resultado.value)  {
            
                    

                    $.ajax({
                        url: "ajax/noticias.ajax.php",
                        method: "POST",
                        data: datos,
                        cache: false,
                        contentType: false,
                        processData: false,
                        success: function(respuesta){
                            console.log(respuesta);

                            $("#modal-gestionar-noticia").modal('hide');
                            
                            table.ajax.reload(null,false);

                            $("#idNoticia").val("");
                            $("#txt_Titulo").val("");
                            $("#txtDesc").val("");
                            $("#txtImg").val("");
                            $("#txtUrl").val("");

                            Toast.fire({
                                icon: 'success',
                                title: respuesta
                            })

                        }
                    });
                }
                else{
            
                }

            })

            

            
        })

    
	})

    
	
	

</script>