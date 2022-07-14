<?php

require 'crud/modelos/conexion.php';

$db = new Conexion();
$con = $db->conectar();

$comando = $con->query("SELECT id, nombre_moto, precio_moto, ano_moto, tipo_moto, 
marca_moto, motor_moto, poten_moto, despl_moto, bore_moto FROM motos ORDER BY id ASC");
$comando->execute();
$resultado = $comando->fetchAll(PDO::FETCH_ASSOC);


?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Freelancer - Start Bootstrap Theme</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    <body class="page-shop">

    
      <div class="page-wrapper">
       <header class="page-header page-header-transparent">
         <div class="page-header__inner">
           <div class="page-header__left">
             <div class="logo"><a class="logo__link" href="index.html">
                 <div class="logo__icon"><img src="assets/img/logo.svg" alt="MotoFix"></div>
                 <div class="logo__text">MOTOFIX</div>
               </a></div>
           </div>
           <div class="page-header__center">
             <nav class="page-nav" data-bs-navbar>
               <ul class="bs-navbar-nav">
                 <li><a href="index.html">INICIO</a>
                   <div class="bs-navbar-dropdown">
                     <ul class="bs-nav bs-navbar-dropdown-nav">
                       <li><a href="index.html">Inicio</a></li>
                       <!--<li><a href="page-home-2.html">Home 2</a></li> -->
                     </ul>
                   </div>
                 </li>
                 <li><a href="typography.html">Acerca de</a></li>
                 <li><a href="page-shop-grid.html">Motocicletas</a>
                   <div class="bs-navbar-dropdown">
                     <ul class="bs-nav bs-navbar-dropdown-nav">
                       <li><a href="page-shop-grid.html">Inventario</a></li>
                       <!--<li><a href="page-shop-list.html">Page  list</a></li>
                       <li><a href="page-shop-product-1.html">Page Single 1</a></li>
                       <li><a href="page-shop-product-2.html">Page Single 2</a></li>-->
                     </ul>
                   </div>
                 </li>
          
                 <li><a href="page-blog-grid.html">Noticias</a>
                   <div class="bs-navbar-dropdown">
                     <ul class="bs-nav bs-navbar-dropdown-nav">
                       <li><a href="page-blog-grid.html">Noticias</a></li>
                       <!--<li><a href="page-blog-list.html">Page Blog list</a></li>
                       <li><a href="page-blog-article.html">Page Blog article</a></li>-->
                     </ul>
                   </div>
                 </li>
                 
                 <li><a href="page-contacts.html">Contacto</a></li>
               </ul>
             </nav>
           </div>
           <div class="page-header__right"><a class="bs-navbar-toggle search-btn" href="#modal-search" data-bs-search-icon data-bs-toggle></a><a class="bs-navbar-toggle cart-btn" href="#!">
               <div class="cart-btn__icon bs-icon" data-bs-icon="cart"><span class="cart-btn__count">2</span></div>
             </a><a class="bs-navbar-toggle menu-btn" href="#offcanvas" data-bs-toggle><img src="assets/img/icons/menu.svg" alt="menu"></a></div>
         </div>
       </header>
       <main class="page-main">
         <div class="section-hero">
           <div class="section-hero__bg" style="background-image: url(assets/img/img-home-slideshow.jpg)">
             <div class="bs-container">
               <div class="section-hero__content">
                 <div class="section-hero__title"> <span>LLEVANDO EL MOTOCICLISMO A OTRO NIVEL</span>
                   <div class="bs-h1">Inventario</div>
                 </div>
                 <div class="section-hero__breadcrumb">
                   <ul class="bs-breadcrumb">
                     <li><a href="index.html">Inicio</a></li>
                     <li> <span>Inventario</span></li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div class="page-content">
           <div class="bs-section-large bs-container">
             <div class="bs-grid" data-bs-grid>
               <div class="bs-width-1-3@m">
                 <div class="js-filter-more filter-more">
                   <div class="filter-more__desc">
                     <div class="bs-h4">Busqueda</div><span>Encuentra tu motocicleta</span>
                   </div>
                   <div class="filter-more__icon"><img src="assets/img/logo.svg" alt="logo"></div>
                 </div>
                 <aside class="sidebar js-filter-content">
                   <div class="widjet widjet--filters">
                     <div class="widjet__content">
                       <div class="bs-grid bs-grid-small bs-child-width-1-2" data-bs-grid>
                         <div class="bs-width-1-1"><select class="bs-select bs-form-large" name="make">
                             <option value="">Selecciona Marca</option>
                             <option value="option-1">option-1</option>
                             <option value="option-2">option-2</option>
                           </select></div>
                         <div class="bs-width-1-1"><select class="bs-select bs-form-large" name="model">
                             <option value="">Selecciona Modelo</option>
                             <option value="option-1">option-1</option>
                             <option value="option-2">option-2</option>
                           </select></div>
                         <div class="bs-width-1-1"><select class="bs-select bs-form-large" name="type">
                             <option value="">Selecciona Tipo</option>
                             <option value="option-1">option-1</option>
                             <option value="option-2">option-2</option>
                           </select></div>
                         <div><select class="bs-select bs-form-large" name="min">
                             <option value="">Min CC</option>
                             <option value="option-1">option-1</option>
                             <option value="option-2">option-2</option>
                           </select></div>
                         <div><select class="bs-select bs-form-large" name="max">
                             <option value="">Max CC</option>
                             <option value="option-1">option-1</option>
                             <option value="option-2">option-2</option>
                           </select></div>
                       </div>
                     </div>
                   </div>
                   <div class="widjet widjet--price">
                     <div class="widjet__title">
                       <div class="bs-h4">Rango de Precio</div><span>Escoge tu Precio</span>
                     </div>
                     <div class="widjet__content">
                       <div class="range-box"><input class="js-range-slider" id="range-price" type="text" name="price" value="">
                         <div class="range-box__desc"> <span>Rango en MXN: $</span><input id="range-price-from" type="text"><span>-</span><input id="range-price-to" type="text"></div>
                       </div>
                     </div>
                   </div>
                   <div class="widjet widjet--mileage">
                     <div class="widjet__title">
                       <div class="bs-h4">Kilometraje</div><span>Escoje el Kilometraje</span>
                     </div>
                     <div class="widjet__content">
                       <div class="range-box"><input class="js-range-slider" id="range-mileage" type="text" name="mileage" value="">
                         <div class="range-box__desc"> <span>KM Seleccionado: </span><input id="range-mileage-from" type="text"><span>- </span><input id="range-mileage-to" type="text"></div>
                       </div>
                     </div>
                   </div>
                   <div class="widjet">
                     <div class="widjet__content">
                       <div class="bs-text-center"><button class="bs-button bs-button-danger" type="button">Aplicar Filtro</button><br><a class="bs-text-meta bs-margin-top" href="#!">Limpiar Filtros</a></div>
                     </div>
                   </div>
                 </aside>
               </div>
               <div class="bs-width-2-3@m">
                 <div class="sorting">
                   <div class="sorting-left">
                     <div class="result-count">Se encotraron <span>5</span> resultados.</div>
                   </div>
                   <div class="sorting-right"> <select class="bs-select" name="orderby">
                       <option value="popularity">Mas Nuevos</option>
                       <option value="rating">Calificacion mas alta</option>
                       <option value="date" selected>Mas Nuevos</option>
                       <option value="price">Por precio: bajo a mas alto</option>
                       <option value="price-desc">Por Precio: alto a mas bajo</option>
                     </select><button class="sorting-btn btn-list" type="button"> <img src="assets/img/icons/list.svg" alt="list" data-bs-svg></button><button class="sorting-btn btn-grid is-active" type="button"> <img src="assets/img/icons/grid.svg" alt="grid" data-bs-svg></button></div>
                 </div>
                 <div class="products-items bs-grid bs-child-width-1-2@s" data-bs-grid>
                 <?php
                    foreach($resultado AS $row){
                    ?>
                   <div>
                     <div class="product-item bs-transition-toggle">
                       <div class="product-item__head">
                         <div>
                           <div class="product-item__name"> <a href="page-shop-product-1.html"><td><?php echo $row['nombre_moto']; ?></td></a></div>
                         <div class="product-item__manufacturer">Powered by Bajaj</div>
                       </div>
                       <div>
                         <div class="product-item__price">$<td><?php echo $row['precio_moto']; ?></td></div>
                       </div>
                     </div>
                     <div class="product-item__media bs-inline-clip bs-inline"><img src="assets/img/product-1.jpg" alt="BMW S1000 RX" /><a class="bs-transition-fade" href="page-shop-product-1.html">
                         <div class="bs-overlay-cover bs-overlay-primary"></div>
                         <div class="bs-position-center"><span class="icon-cross"></span></div>
                       </a><button class="product-item__whish btn-whish"><i class="far fa-heart"></i></button></div>
                     <div class="product-item__info">
                       <ul class="list-info">
                         <li class="list-info-item">
                           <div class="list-info-item__title">Año</div>
                           <div class="list-info-item__value"><td><?php echo $row['ano_moto']; ?></td></div>
                         </li>
                         <li class="list-info-item">
                           <div class="list-info-item__title">Tipo</div>
                           <div class="list-info-item__value"><td><?php echo $row['tipo_moto']; ?></td></div>
                         </li>
                         <li class="list-info-item">
                           <div class="list-info-item__title">Marca</div>
                           <div class="list-info-item__value"><td><?php echo $row['marca_moto']; ?></td></div>
                         </li>
                       </ul>
                     </div>
                     <div class="product-item__specifications">
                       <ul class="specifications-list">
                         <li class="specifications-list-item">
                           <div class="specifications-list-item__icon"><img src="assets/img/icons/specifications-1.png" alt="Engine type" /></div>
                           <div class="specifications-list-item__desc">
                             <div class="specifications-list-item__title">Motor</div>
                             <div class="specifications-list-item__value"><td><?php echo $row['motor_moto']; ?></td></div>
                           </div>
                         </li>
                         <li class="specifications-list-item">
                           <div class="specifications-list-item__icon"><img src="assets/img/icons/specifications-2.png" alt="Engine Power" /></div>
                           <div class="specifications-list-item__desc">
                             <div class="specifications-list-item__title">Potencia</div>
                             <div class="specifications-list-item__value"><td><?php echo $row['poten_moto']; ?></td></div>
                           </div>
                         </li>
                         <li class="specifications-list-item">
                           <div class="specifications-list-item__icon"><img src="assets/img/icons/specifications-3.png" alt="Displacement" /></div>
                           <div class="specifications-list-item__desc">
                             <div class="specifications-list-item__title">Desplasamiento</div>
                             <div class="specifications-list-item__value"><td><?php echo $row['despl_moto']; ?></td></div>
                           </div>
                         </li>
                         <li class="specifications-list-item">
                           <div class="specifications-list-item__icon"><img src="assets/img/icons/specifications-4.png" alt="Bore/Stroke" /></div>
                           <div class="specifications-list-item__desc">
                             <div class="specifications-list-item__title">Bore/Stroke</div>
                             <div class="specifications-list-item__value"><td><?php echo $row['bore_moto']; ?></td></div>
                           </div>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 <?php } ?>
                </div>
                 <div class="bs-margin-large-top bs-text-center">
                   <ul class="bs-pagination bs-flex-center">
                     <li><a href="#"><span data-bs-pagination-previous></span></a></li>
                     <li class="bs-active"><span>1</span></li>
                     <li><a href="#">2</a></li>
                     <li><a href="#">3</a></li>
                     <li><a href="#">4</a></li>
                     <li><a href="#"><span data-bs-pagination-next></span></a></li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </main>
       <div class="section-subscribe">
         <div class="bs-container">
           <div class="subscribe-box">
             <div class="bs-grid bs-flex-middle bs-child-width-1-2@m" data-bs-grid>
               <div>
                 <div class="section-title"><span>Las ultimas noticias del mundo de las motos en tu inbox</span>
                   <div class="bs-h2">Suscribete aqui ----></div>
                 </div>
               </div>
               <div>
                 <div class="subscribe-box__form">
                   <form action="#!">
                     <div class="bs-flex bs-flex-middle"><input class="bs-input" type="email" name="email" placeholder="Email Address ...."><button class="bs-button bs-button-danger" type="submit">Suscribir</button></div>
                   </form>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <footer class="page-footer">
         <div class="page-footer__top">
           <div class="bs-container">
             <div class="bs-grid bs-grid-small bs-child-width-1-4@l bs-child-width-1-2@s" data-bs-grid>
               <div>
                 <div class="bs-margin-medium">
                   <div class="logo"><a class="logo__link" href="index.html">
                       <div class="logo__icon"><img src="assets/img/logo.svg" alt="MotoFix"></div>
                       <div class="logo__text">MOTOFIX</div>
                     </a></div>
                 </div>
                 <div class="bs-margin-medium">
                   <p>Contactanos para cualquier duda o pregunta que tengas.</p>
                 </div>
                 <div class="bs-margin-medium">
                   <div class="support"><a class="support__link" href="tel:13004905008">
                       <div class="support__icon"><i class="fas fa-headset"></i></div>
                       <div class="support__desc">
                         <div class="support__label">Habla con un representante</div>
                         <div class="support__phone">(662) 210 0593</div>
                       </div>
                     </a></div>
                 </div>
                 <div class="bs-margin-medium">
                   <div class="social">
                     <ul class="social-list">
                       <li class="social-list__item"><a class="social-list__link" href="https://www.instagram.com/bajaj_noroeste/"><i class="fab fa-instagram"></i></a></li>
                       <li class="social-list__item"><a class="social-list__link" href="https://www.facebook.com/BajajNoroesteOficial"><i class="fab fa-facebook-f"></i></a></li>
                       <li class="social-list__item"><a class="social-list__link" href="#!"><i class="fab fa-google-plus-g"></i></a></li>
                       <li class="social-list__item"><a class="social-list__link" href="#!"><i class="fab fa-youtube"></i></a></li>
                       <li class="social-list__item"><a class="social-list__link" href="#!"><i class="fab fa-pinterest-p"></i></a></li>
                     </ul>
                   </div>
                 </div>
               </div>
               <div>
                 <div class="page-footer__column page-footer__menu">
                   <div class="bs-h4">Acerca de MotoFix</div>
                   <ul class="list-decor">
                     <li> <a href="typography.html">Nuestra Empresa</a></li>
                     <li> <a href="typography.html">Programa de Rentas</a></li>
                     <li> <a href="typography.html">Inventario MotoFix</a></li>
                     <li> <a href="typography.html">Nuestros Servicios</a></li>
                     <li> <a href="typography.html">Testimonio de clientes</a></li>
                     <li> <a href="typography.html">Mision & Vision</a></li>
                     <li> <a href="page-contacts.html">Contactanos</a></li>
                   </ul>
                 </div>
               </div>
               <div>
                 <div class="page-footer__column page-footer__news">
                   <div class="bs-h4">Ultimas Noticias</div>
                   <ul class="latest-news-list">
                     <li>
                       <div class="latest-news-item">
                         <div class="latest-news-item__thumb"><img src="assets/img/news-thumb-1.jpg" alt="news-thumb"></div>
                         <div class="latest-news-item__info"><a class="latest-news-item__title" href="page-blog-article.html">We Allow Each Rider To Customize Their Rides.</a>
                           <div class="latest-news-item__date">August 25, 2021</div>
                         </div>
                       </div>
                     </li>
                     <li>
                       <div class="latest-news-item">
                         <div class="latest-news-item__thumb"><img src="assets/img/news-thumb-2.jpg" alt="news-thumb"></div>
                         <div class="latest-news-item__info"><a class="latest-news-item__title" href="page-blog-article.html">Motorcycles Which Feels Just Right Like Ease.</a>
                           <div class="latest-news-item__date">August 25, 2021</div>
                         </div>
                       </div>
                     </li>
                     <li>
                       <div class="latest-news-item">
                         <div class="latest-news-item__thumb"><img src="assets/img/news-thumb-3.jpg" alt="news-thumb"></div>
                         <div class="latest-news-item__info"><a class="latest-news-item__title" href="page-blog-article.html">Gaze Upon Unbelievably Exciting To Futuristic.</a>
                           <div class="latest-news-item__date">August 25, 2021</div>
                         </div>
                       </div>
                     </li>
                   </ul>
                 </div>
               </div>
               <div>
                 <div class="page-footer__column page-footer__info">
                   <div class="bs-h4">Horarios de Servicio</div>
                   <ul class="info-list">
                     <li>
                       <div class="info-list-item">
                         <div class="info-list-item__title">Sala de Exhibicion </div>
                         <div class="info-list-item__value">Lunes - Viernes: <br> 09:00 am a 06:00 pm</div>
                       </div>
                     </li>
                     <li>
                       <div class="info-list-item">
                         <div class="info-list-item__title">Taller de Servicio</div>
                         <div class="info-list-item__value">Lunes - Viernes: <br> 09:00 am a 05:00 pm</div>
                       </div>
                     </li>
                     <li>
                       <div class="info-list-item">
                         <div class="info-list-item__title">Refacciones</div>
                         <div class="info-list-item__value">Lunes - Viernes: <br> 09:00 am to 05:00 pm</div>
                       </div>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div class="page-footer__bottom">
           <div class="bs-container">
             <div class="bs-text-center">(c) 2021 MOTOFIX - Motorcycles Dealer. All rights reserved.</div>
           </div>
         </div>
         <!--<div id="offcanvas" data-bs-offcanvas="flip: true; overlay: true; mode: push">
           <div class="bs-offcanvas-bar"><button class="bs-offcanvas-close" type="button" data-bs-close=""></button>
             <div class="bs-margin">
               <div class="logo"><a class="logo__link" href="index.html">
                   <div class="logo__icon"><img src="assets/img/logo.svg" alt="KeyMoto"></div>
                   <div class="logo__text">KEYMOTO</div>
                 </a></div>
             </div>
             <div class="bs-margin">
                 
                 
               <ul class="bs-nav bs-nav-default bs-nav-parent-icon" data-bs-nav>
                 <li class="bs-parent"><a href="#">Home</a>
                   <ul class="bs-nav-sub">
                     <li><a href="index.html">Home 1</a></li>
                       <li><a href="page-home-2.html">Home 2</a></li>
                   </ul>
                 </li>
                 <li><a href="typography.html">About</a></li>
                 <li class="bs-parent"><a href="#">News</a>
                   <ul class="bs-nav-sub">
                     <li><a href="page-blog-grid.html">Page Blog grid</a></li>
                     <li><a href="page-blog-list.html">Page Blog list</a></li>
                     <li><a href="page-blog-article.html">Page Blog article</a></li>
                   </ul>
                 </li>
                 <li class="bs-parent"><a href="#">Moto Pages</a>
                   <ul class="bs-nav-sub">
                     <li><a href="page-shop-grid.html">Page grid</a></li>
                     <li><a href="page-shop-list.html">Page list</a></li>
                     <li><a href="page-shop-product-1.html">Page Single 1</a></li>
                     <li><a href="page-shop-product-2.html">Page Singless 2</a></li>
                   </ul>
                 </li>
                 <li><a href="page-contacts.html">Contact</a></li>
               </ul>
             </div>
             <div class="bs-margin-auto-top">
               <div class="support"><a class="support__link" href="tel:13004905008">
                   <div class="support__icon"><i class="fas fa-headset"></i></div>
                   <div class="support__desc">
                     <div class="support__label">Talk with our support</div>
                     <div class="support__phone">+1 (300) 490 5008</div>
                   </div>
                 </a></div>
             </div>
           </div>
         </div>
         <div class="bs-modal-full bs-modal" id="modal-search" data-bs-modal>
           <div class="bs-modal-dialog bs-flex bs-flex-center bs-flex-middle" data-bs-height-viewport><button class="bs-modal-close-full" type="button" data-bs-close></button>
             <form class="bs-search bs-search-large"><input class="bs-search-input bs-text-center" type="search" placeholder="Search..." autofocus></form>
           </div>
         </div><!-- End Дополнительные блоки-->
       </footer>
         
     </div>
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="js/scripts.js"></script>
        <script src="js/jquery.min.js"></script>
        <script src="js/min.js"></script>
        <script src="js/icons.min.js"></script>
        <script src="js/fontawesome.all.min.js"></script>
        <script src="js/slick.min.js"></script>
        <script src="js/ion.rangeSlider.min.js"></script>
        <script src="js/main.js"></script>
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <!-- * *                               SB Forms JS                               * *-->
        <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
</html>
    