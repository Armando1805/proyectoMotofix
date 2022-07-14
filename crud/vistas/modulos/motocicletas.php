<!-- CONTENT-HEADER -->
<section class="content-header">

	<div class="container-fluid">

		<div class="row mb-2">

			<div class="col-sm-6">
				<h1>Administrar Motocicletas</h1>
			</div>

			<div class="col-sm-6">
				
				<ol class="breadcrumb float-sm-right">

					<li class="breadcrumb-item"><a href="index.php">Inicio</a></li>

                	<li class="breadcrumb-item active">Gestor Motocicletas</li>						
				</ol>

			</div>
		</div>	
	</div>	

</section>
<!-- /. CONTENT HEADER -->

<!-- CONTENT -->
<section class="content">
    
    <div class="container-fluid">   

        <div class="btn-agregar-motocicleta btnAgregar">
            <button type="button" class="btn btn-info btn-sm mb-4" data-toggle="modal" data-target="#modal-gestionar-motocicleta" data-dismiss="modal"> <i class="fas fa-plus-square"></i> Agregar Motocicleta</button>
        </div>

        <table id="tablaMotocicletas" class="table table-striped table-bordered nowrap" style="width:100%;">
            <thead class="bg-info">
                <tr>
                    <td style="width:5%;">ID</td>
                    <td>Nombre</td>
                    <td>Precio</td>
                    <td>Año</td>
                    <td>Tipo</td>
                    <td>Marca</td>
                    <td>Motor</td>
                    <td>Poten</td>
                    <td>Despl</td>
                    <td>Bore/Stroke</td>
                    <td>Accion</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>    

    </div>  

</section>
<!-- ./ CONTENT -->

<!-- VENTANA MODAL PARA REGISTRO Y ACTUALIZACION -->
<div class="modal fade" id="modal-gestionar-motocicleta">

    <div class="modal-dialog modal-lg">

        <div class="modal-content">

            <!-- ============================================================
            =MODAL HEADER
            ===============================================================-->
            <div class="modal-header bg-info">
                <h4 class="modal-title">Gestionar Motocicleta</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <!-- ============================================================
            =MODAL BODY
            ===============================================================-->
            <div class="modal-body">
               <div class="row">
                   <div class="col-sm-4">
                        <div class="form-group">
                            <input type="hidden" id ="idMotos" name ="nombre_moto" value ="">
                            <label for="txtNombre_moto">Nombre</label>
                            <input type="text" class="form-control" name="nombre_moto" id="txtNombre_moto" placeholder="Ingrese el Nombre">
                        </div>
                   </div>
                   <div class="col-sm-4">
                        <div class="form-group">
                            <label for="txtPrecio_moto">Precio</label>
                            <input type="number" class="form-control" name="precio_moto" id="txtPrecio_moto" placeholder="Ingrese el Precio">
                        </div>
                   </div>
                   <div class="col-sm-4">
                        <div class="form-group">
                            <label for="txtAno_moto">Año</label>
                            <input type="number" class="form-control" name="ano_moto" id="txtAno_moto" placeholder="Ingrese el Año">
                        </div>
                   </div>
                   <div class="col-sm-4">
                        <div class="form-group">
                            <label for="txt_Tipo_moto">Tipo</label>
                            <input type="text" class="form-control" name="tipo_moto" id="txt_Tipo_moto" placeholder="Ingrese el Tipo">
                        </div>
                   </div>
                   <div class="col-sm-4">
                        <div class="form-group">
                            <label for="txtMarca_moto">Marca</label>
                            <input type="text" class="form-control" name="marca_moto" id="txtMarca_moto" placeholder="Ingrese la Marca">
                        </div>
                   </div>
                   <div class="col-sm-4">
                        <div class="form-group">
                            <label for="txtMotor_moto">Motor</label>
                            <input type="text" class="form-control" name="motor_moto" id="txtMotor_moto" placeholder="Ingrese el Motor">
                        </div>
                   </div>
                   <div class="col-sm-4">
                        <div class="form-group">
                            <label for="txtPoten_moto">Potencia</label>
                            <input type="text" class="form-control" name="poten_moto" id="txtPoten_moto" placeholder="Ingrese la Potencia">
                        </div>
                   </div>
                   <div class="col-sm-4">
                        <div class="form-group">
                            <label for="txtDespl_moto">Desplazamiento</label>
                            <input type="text" class="form-control" name="despl_moto" id="txtDespl_moto" placeholder="Ingrese el Desplazamiento">
                        </div>
                   </div>
                   <div class="col-sm-4">
                        <div class="form-group">
                            <label for="txtBore_moto">Bore/Stroke</label>
                            <input type="text" class="form-control" name="bore_moto" id="txtBore_moto" placeholder="Ingrese el Bore/Stroke">
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

  		var table = $("#tablaMotocicletas").DataTable({
  			"ajax":{
				"url": "ajax/motocicletas.ajax.php",
				"type":"POST",
				"dataSrc":""
			},  			
            "columnDefs":[ 
            		{
	            		"targets": 10,
	            		"sortable": false,
	            		"render": function (data, type, full, meta){
	            			return "<center>" +
	                                    "<button type='button' class='btn btn-primary btn-sm btnEditar' data-toggle='modal' data-target='#modal-gestionar-motocicleta'> " +
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
                    {"data": "nombre_moto"},
                    {"data": "precio_moto"},
                    {"data": "ano_moto"},
                    {"data": "tipo_moto"},
                    {"data": "marca_moto"},
                    {"data": "motor_moto"},
                    {"data": "poten_moto"},
                    {"data": "despl_moto"},
                    {"data": "bore_moto"}
                   
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

        $(".btn-agregar-motocicleta").on('click',function(){
            accion = "registrar";
        });

        $('#tablaMotocicletas tbody').on('click','.btnEliminar',function(){
            var data = table.row($(this).parents('tr')).data();
            
            var id = data["id"];

            var datos = new FormData();
            datos.append('accion',"eliminar")
            datos.append('id',id);

            swal.fire({

                title: "¡CONFIRMACION!",
                text: "Seguro que desea eliminar la motocicleta?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: "Sí, Eliminar",
                cancelButtonText: "Cancelar"

            }).then(resultado => {

                if(resultado.value)  {                    

                    //LLAMADO AJAX
                    $.ajax({
                        url: "ajax/motocicletas.ajax.php",
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
                    // alert("no se modifico la motocicleta");
                }

            })
        })

        $('#tablaMotocicletas tbody').on('click','.btnEditar',function(){
            
            var data = table.row($(this).parents('tr')).data();
            accion = "actualizar";

            $("#idMotos").val(data["id"]);
            $("#txtNombre_moto").val(data["nombre_moto"]);
            $("#txtPrecio_moto").val(data["precio_moto"]);
            $("#txtAno_moto").val(data["ano_moto"]);
            $("#txt_Tipo_moto").val(data["tipo_moto"]);
            $("#txtMarca_moto").val(data["marca_moto"]);
            $("#txtMotor_moto").val(data["motor_moto"]);
            $("#txtPoten_moto").val(data["poten_moto"]);
            $("#txtDespl_moto").val(data["despl_moto"]);
            $("#txtBore_moto").val(data["bore_moto"]);
           
            

        })

        // GUARDAR LA INFORMACION DE MOTOCICLETA DESDE LA VENTANA MODAL
        $("#btnGuardar").on('click',function(){

        var id = $("#idMotos").val(),
            nombre_moto = $("#txtNombre_moto").val(),
            precio_moto = $("#txtPrecio_moto").val(),
            ano_moto = $("#txtAno_moto").val(),
            tipo_moto = $("#txt_Tipo_moto").val(),
            marca_moto = $("#txtMarca_moto").val(),
            motor_moto = $("#txtMotor_moto").val(),
            poten_moto = $("#txtPoten_moto").val(),
            despl_moto = $("#txtDespl_moto").val(),
            bore_moto = $("#txtBore_moto").val();
            
                
            
            var datos = new FormData();

            datos.append('id',id);
            datos.append('nombre_moto',nombre_moto);
            datos.append('precio_moto',precio_moto);
            datos.append('ano_moto',ano_moto);
            datos.append('tipo_moto',tipo_moto);
            datos.append('marca_moto',marca_moto);
            datos.append('motor_moto',motor_moto);
            datos.append('poten_moto',poten_moto);
            datos.append('despl_moto',despl_moto);
            datos.append('bore_moto',bore_moto);
            datos.append('accion', accion);

            swal.fire({
                title: "¡CONFIRMAR!",
                text: "¿Está seguro que desea registrar la categoría?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: "Si, deseo registrar",
                cancelButtonText: "Cancelar"
            
            }).then(resultado => {

                if(resultado.value)  {
            
                    

                    $.ajax({
                        url: "ajax/motocicletas.ajax.php",
                        method: "POST",
                        data: datos,
                        cache: false,
                        contentType: false,
                        processData: false,
                        success: function(respuesta){
                            console.log(respuesta);

                            $("#modal-gestionar-motocicleta").modal('hide');
                            
                            table.ajax.reload(null,false);

                            $("#idMotos").val("");
                            $("#txtNombre_moto").val("");
                            $("#txtPrecio_moto").val("");
                            $("#txtAno_moto").val("");
                            $("#txt_Tipo_moto").val("");
                            $("#txtMarca_moto").val("");
                            $("#txtMotor_moto").val("");
                            $("#txtPoten_moto").val("");
                            $("#txtDespl_moto").val("");
                            $("#txtBore_moto").val("");
                           

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