<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

        <?php 
            if(isset($_GET['cmd']) && $_GET['cmd'] == 'condominio') { ?>
            <script src="condominio.js?<?php echo time(); ?>" async defer></script>
           <?php } elseif(isset($_GET['cmd']) && $_GET['cmd'] == 'distancia') { ?>
            <script src="distancia-functions.js?<?php echo time(); ?>" async defer></script>            
            <?php } else { ?>
                <script src="script.js?<?php echo time(); ?>" async defer></script>
            <?php } ?>
    </body>
</html>